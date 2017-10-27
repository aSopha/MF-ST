var overState = {

    create: function () {

        let overText = game.add.text(game.world.width/2, 80, 'Game Over Scrub', { fontSize : '50px', fill: '#F0F0F0'});
    	overText.anchor.setTo(0.5, 0.5);

        let restartLabel = game.add.text(game.world.width/2, 160, 'Press Enter to restart' ,
            { fontSize : '50px', fill: '#F0F0F0'});
        restartLabel.anchor.setTo(0.5, 0.5);


        makeAnimation(50,50,'fail', 12);
        makeAnimation(game.world.width-300, 50, 'yeahOk',12);
        makeAnimation(game.world.width/2 -125, 220, 'jumprope',24);
        makeAnimation(game.world.width-330, 420, 'headshot', 9);
        makeAnimation(30, 440, 'headshake', 12);
        makeAnimation(330, 400, 'deerheadbutt', 12);

        var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        enterkey.onDown.addOnce(this.restart, this);

    },

    restart: function() {
        game.state.start('menu');
        level.reset();
        weapon.reset();
        player.reset();
    }
}

function makeAnimation(x, y, assetName, framerate) {
    let fail = game.add.sprite(x, y, assetName);
    let failPlay = fail.animations.add('failPlay');
    fail.animations.play('failPlay', framerate, true);
}
