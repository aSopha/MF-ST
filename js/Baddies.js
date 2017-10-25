class Baddies {
    constructor(){
        this.miias;
    }

    setupMiias() {
        this.miias = game.add.group();
        this.miias.enableBody = true;
        for (var i = 0; i < 25; i++) {
            var miia = this.miias.create(game.world.randomX, game.world.randomY, 'miia');
    		miia.anchor.setTo(0.5,0.5);
    		miia.kill();
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

    spawnBaddie() {

    	if(level.enemiesRemaining <=0 || level.over == true) {
    		return;
    	}

        let baddie = this.miias.getFirstDead();
    	if(baddie === null) {
            console.log('no dead baddies');
    		return;
    	}
        baddie.revive();

    	let location = this.chooseLocation();

        baddie.x = location.x;
        baddie.y = location.y;

    	level.enemiesRemaining--;
        console.log('spawning baddie');
        return baddie;
    }
}
