let game = new Phaser.Game(1200, 900, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let score = 0;
let scoreText;
let bullets;

let fireRate = 100;
let nextFire = 0;

let playerDead = false;

function preload() {
	game.load.image('background', 'assets/ghostBackground.jpg');
    game.load.image('wartortle', 'assets/Wartortle.png');
    game.load.image('ball', 'assets/ball.png');
    game.load.image('baddie', 'assets/miia4.png')


}

function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'background');

    player = game.add.sprite(40, game.world.height - 150, 'wartortle');

    game.physics.arcade.enable(player);

    shots = game.add.group();
    shots.enableBody = true;

    shots.createMultiple(100, 'ball');
    shots.setAll('checkWorldBounds', true);
    shots.setAll('outOfBoundsKill', true);

    baddies = game.add.group();
    baddies.enableBody = true;

    for (var i = 0; i < 50; i++)
    {
        var baddie = baddies.create(game.world.randomX, game.world.randomY, 'baddie');
    }




    wasd = {
  	up: game.input.keyboard.addKey(Phaser.Keyboard.W),
  	down:game.input.keyboard.addKey(Phaser.Keyboard.S),
  	left: game.input.keyboard.addKey(Phaser.Keyboard.A),
  	right: game.input.keyboard.addKey(Phaser.Keyboard.D),
	};

}

function update() {

    game.physics.arcade.overlap(shots, baddies, hitBaddie, null, this);
    game.physics.arcade.overlap(player, baddies, killPlayer, null, this);
    baddies.forEach(function (baddie) {game.physics.arcade.moveToObject(baddie, player, 50)});

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (wasd.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -300;


    }
    if (wasd.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 300;

    }
	if (wasd.up.isDown)
    {
        //  Move to the up
        player.body.velocity.y = -300;

    }
	if (wasd.down.isDown)
    {
        //  Move to the down
        player.body.velocity.y = 300;

    }

    if(player.body.velocity.y != 0 && player.body.velocity.x !=0) {
        player.body.velocity.y *= 0.709;
        player.body.velocity.x *= 0.709;
    }

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

        ball.reset(player.x+ 12, player.y+ 20);

        game.physics.arcade.moveToPointer(ball, 600);
    }

}

function hitBaddie(shot, baddie) {
    shot.kill();
    baddie.kill();

}

function killPlayer(guy, enemy) {
    guy.kill();
    enemy.kill();
    game.paused = true;

//    guy.revive();

    game.input.onTap.addOnce(restart,this);
    //baddie.kill();
}

function restart() {
    player.revive()
    game.paused =false;
}
