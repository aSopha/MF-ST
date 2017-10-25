let game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let score = 0;
let scoreText;
let bullets;

let fireRate = 300;
let nextFire = 0;

let playerDead = false;

let currency = 0;
let currencyText;

let level = 0;
let levelText;

let killCount = 0;
let levelCount = 25;

let levelSpawnCount = 25;

let button;

function preload() {
	game.load.image('background', 'assets/ghostBackground.jpg');
    game.load.image('wartortle', 'assets/Wartortle.png');
    game.load.image('ball', 'assets/ball.png');
    game.load.image('baddie', 'assets/miia4.png');
	game.load.image('coin', 'assets/mistycoin.png');
	game.load.image('drop', 'assets/mistycoinDrop.png');
	game.load.image('button', 'assets/button.png');


}

function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'background');

	levelText = game.add.text(0, 0, 'Level: 0', { fontSize : '50px', fill: '#F0F0F0'});
	levelText.anchor.setTo(0,0);

	button = game.add.button(200,0, 'button', increaseFireRate)


	//
    player = game.add.sprite(game.world.width/2, game.world.height/2, 'wartortle');
	player.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(player);
	player.enableBody = true;
	player.physicsBodyType = Phaser.Physics.ARCADE;
	player.body.collideWorldBounds = true;



    shots = game.add.group();
    shots.enableBody = true;
	//shots.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

    shots.createMultiple(200, 'ball');
    shots.setAll('checkWorldBounds', true);
    shots.setAll('outOfBoundsKill', true);
	shots.tracking = false;


	coins = game.add.group();
	coins.enableBody = true;
	coins.createMultiple(300, 'drop');




    baddies = game.add.group();
    baddies.enableBody = true;


    for (var i = 0; i < 25; i++)
    {
        var baddie = baddies.create(game.world.randomX, game.world.randomY, 'baddie');
		baddie.anchor.setTo(0.5,0.5);
		baddie.kill();
    }

	currencyText = game.add.text(55, 10, ': 0', { fontSize : '20px', fill: '#F0F0F0'});

	var currencyPic = game.add.sprite(3, 60, 'coin');
	currencyPic.addChild(currencyText);



    wasd = {
  	up: game.input.keyboard.addKey(Phaser.Keyboard.W),
  	down:game.input.keyboard.addKey(Phaser.Keyboard.S),
  	left: game.input.keyboard.addKey(Phaser.Keyboard.A),
  	right: game.input.keyboard.addKey(Phaser.Keyboard.D),
	};

}

function update() {


    game.physics.arcade.overlap(shots, baddies, hitBaddie, null, this);
	game.physics.arcade.overlap(player, coins, pickUp, null, this);
    //game.physics.arcade.overlap(player, baddies, killPlayer, null, this);
    baddies.forEach(function (baddie) {game.physics.arcade.moveToObject(baddie, player, 125)});

	if(Math.abs(player.body.velocity.x) < 150) {
		player.body.velocity.x = 0;
	}
	if(Math.abs(player.body.velocity.y) < 150) {
		player.body.velocity.y = 0;
	}
    player.body.velocity.x = player.body.velocity.x*.85;
    player.body.velocity.y = player.body.velocity.y*.85;



	spawnBaddie();
	if(killCount === levelCount) {
		nextLevel();
		levelCount += 25;
		levelSpawnCount +=25
	}


    if (wasd.left.isDown)
    {
        //  Move left
        player.body.velocity.x = -300;
    }
    if (wasd.right.isDown)
    {
        //  Move right
        player.body.velocity.x = 300;
    }
	if (wasd.up.isDown)
    {
        //  Move up
        player.body.velocity.y = -300;
    }
	if (wasd.down.isDown)
    {
        //  Move down
        player.body.velocity.y = 300;
    }

	//Diagonal Movement
    if(player.body.velocity.y != 0 && player.body.velocity.x !=0) {
        player.body.velocity.y *= 0.709;
        player.body.velocity.x *= 0.709;
    }

	//Left mouse button to shoot
    if (game.input.activePointer.isDown)
    {
        fire();
    }

}

function fire() {

    if (game.time.now > nextFire)
    {
        nextFire = game.time.now + fireRate;
        var ball = shots.getFirstDead();

        ball.reset(player.x, player.y );
		ball.anchor.setTo(0.5, 0.5);
        game.physics.arcade.moveToPointer(ball, 400);
		ball.rotation = game.physics.arcade.angleToPointer(ball) +1.6;

    }

}

function increaseFireRate() {
	if(currency>0) {
		currency--;
		fireRate = fireRate - 25;
		updateCurrency();
	}
	return;
}

function updateCurrency() {
	currencyText.text = ': ' + currency;
}
function hitBaddie(shot, baddie) {
	killCount++;
    shot.kill();
    baddie.kill();
	spawnCoin(baddie);
}

function killPlayer(guy, enemy) {
    guy.kill();
    enemy.kill();
    game.paused = true;
//    guy.revive();
    game.input.onTap.addOnce(restart,this);
    //baddie.kill();
}

function spawnCoin(location) {
	let chance = game.rnd.integerInRange(0,3);
	if(chance == 0){
		let coin = coins.getFirstDead();
		coin.reset(location.x, location.y);
	}
}

function pickUp(guy, coin) {
	coin.kill();
	currency += 1;
	currencyText.text = ': ' + currency;
}

function chooseLocation() {
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
function spawnBaddie() {
	if(levelSpawnCount <=0) {
		return
	}
    let baddie = this.baddies.getFirstDead();
	if(baddie === null) {
		return;
	}
    baddie.revive();

    // Move the missile to the given coordinates
	let location = chooseLocation();
    baddie.x = location.x;
    baddie.y = location.y;
	levelSpawnCount--;
	console.log(levelSpawnCount);
    return baddie;
};

function nextLevel() {
	levelText.text = 'Level: ' + ++level;
}

function restart() {
    player.revive()
    game.paused =false;
}
