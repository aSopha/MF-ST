class Baddies {

    constructor(){
        this.miias;
        this.miiaSpawnRate = 300;
        this.nextMiiaSpawn = 0;
        this.miiaHitsToKill = 1;

        this.papis;
        this.papiNextFire = 0;
        this.papiFireRate;
        this.papiFireSpeed = 200;
        this.papiShots;
        this.papiSpawnRate = 3000;
        this.nextPapiSpawn = 0;
        this.papiHitsToKill = 2;

        this.fastMiias;
        this.fastMiiaSpawnRate = 2000;
        this.nextFastMiiaSpawn = 1000;
        this.fastMiiasHitsToKill = 1;

        this.spawnRates = [this.miiaSpawnRate , this.papiSpawnRate, this.fastMiiaSpawnRate];
        this.nextSpawns = [this.nextMiiaSpawn , this.nextPapiSpawn, this.nextFastMiiaSpawn];
        this.hitsToKill = [this.miiaHitsToKill, this.papiHitsToKill, this.fastMiiasHitsToKill];
    }

    setupMiias() {
        this.miias = game.add.group();
        this.miias.enableBody = true;
        for (var i = 0; i < 25; i++) {
            var miia = this.miias.create(game.world.randomX, game.world.randomY, 'miia');
    		miia.anchor.setTo(0.5,0.5);
            miia.type = 0;
    		miia.kill();
        }
    }

    setupPapis(papiCount) {
        this.papis = game.add.group();
        this.papis.enableBody = true;
        this.papis.setAll('checkWorldBounds', true);
        for (var i = 0; i < 25; i++) {
            var papi = this.papis.create(game.world.randomX, game.world.randomY, 'papi');
    		papi.anchor.setTo(0.5,0.5);
    		papi.kill();
            papi.type = 1;
        }
        this.papiShots = game.add.group();
        this.papiShots.enableBody = true;
        this.papiShots.createMultiple(400, 'papiShot');
        this.papiShots.setAll('checkWorldBounds', true);
        this.papiShots.setAll('outOfBoundsKill', true);
    	this.papiShots.tracking = false;
        this.papiFireRate = 800;
    }

    setupFastMiias() {
        this.fastMiias = game.add.group();
        this.fastMiias.enableBody = true;
        for (var i = 0; i < 10; i++) {
            var fastMiia = this.fastMiias.create(game.world.randomX, game.world.randomY, 'fastMiia');
    		fastMiia.anchor.setTo(0.5,0.5);
            fastMiia.type = 2;
    		fastMiia.kill();
        }
        this.nextSpawns[2] = game.time.now + 2000;
    }

    setupAll() {
        this.setupMiias();
        this.setupPapis();
        this.setupFastMiias();
    }

    //Randomly select a papi to fire
    papiFire() {
        if (game.time.now > this.papiNextFire)
        {
            let livingPapis = [];
            livingPapis.length = 0;
            this.papis.forEachAlive(function(papi) {
                livingPapis.push(papi);
            });

            let random = game.rnd.integerInRange(0, livingPapis.length -1);
            let angle = game.physics.arcade.angleBetween(livingPapis[random], player.player);
            let angleDegrees = angle*  57.295;
            this.papiNextFire = game.time.now + this.papiFireRate/(livingPapis.length);
            //console.log(this.papiFireRate/(livingPapis.length));
            let ball = this.papiShots.getFirstDead();
            ball.reset(livingPapis[random].x, livingPapis[random].y);
    		ball.anchor.setTo(0.5, 0.5);
            ball.game.physics.arcade.velocityFromAngle(angleDegrees, this.papiFireSpeed, ball.body.velocity);
    		ball.rotation = angle + 1.57;
        }
    }

    spawnBaddie(currentLevel) {

        let types = [this.miias,this.papis,this.fastMiias];

    	if(level.enemiesRemaining <=0 || level.over == true) {
    		return;
    	}
        let liveBaddieCount = [0,0,0];

        this.miias.forEachAlive(function(miia) {
            liveBaddieCount[0]++;
        });

        this.papis.forEachAlive(function(papi) {
            liveBaddieCount[1]++;
        });

        this.fastMiias.forEachAlive(function(papi) {
            liveBaddieCount[2]++;
        });

        //console.log('live miias: ' + liveBaddieCount[0]);
        //console.log('live papis: ' + liveBaddieCount[1]);
        for(let i = 0; i < 3; i++) {
            //console.log('looping');
            if(liveBaddieCount[i] < level.maxActive[currentLevel][i]
                && level.enemyTypeRemaining[currentLevel][i] > 0) {

                if(game.time.now > this.nextSpawns[i]) {
                    this.nextSpawns[i] = game.time.now + this.spawnRates[i]/level.spawnrateMultiplier[currentLevel][i];
                    let baddie = types[i].getFirstDead();
                	if(baddie === null) {
                        console.log('no dead baddies');
                		return;
                	}
                    baddie.revive();
                    baddie.hitsLeft = this.hitsToKill[i] - 1;
                	let location = this.chooseLocation();

                    baddie.body.velocity.x = game.rnd.integerInRange(-100, 100);
                    baddie.body.velocity.y = game.rnd.integerInRange(-100, 100);

                    baddie.x = location.x;
                    baddie.y = location.y;

                	level.enemiesRemaining--;
                    level.enemyTypeRemaining[level.currentLevel][i]--;
                }
            }
        }


    }

    chooseLocation() {
    	let location = {
    		x:0,
    		y:0
    	};
    	//Top:0 Right:1 Bottom:2 Left:3
    	let side = game.rnd.integerInRange(0, 3);

    	let randx = game.rnd.integerInRange(0, 1200);
    	let randy = game.rnd.integerInRange(0, 600);

    	if(side == 0) {
    		location.x = randx;
    	} else if(side == 1) {
    		location.x = 1200;
    		location.y = randy;
    	} else if(side == 2) {
    		location.x = randx;
    		location.y = 600;
    	} else {
    		location.y = randy;
    	}
    	return location;
    }
}
