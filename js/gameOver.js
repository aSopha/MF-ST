var overState = {

    create: function () {

        let overText = game.add.text(game.world.width/2, 80, 'Game Over Scrub', { fontSize : '50px', fill: '#F0F0F0'});
    	overText.anchor.setTo(0.5, 0.5);

        let restartLabel = game.add.text(game.world.width/2, 160, 'Press Enter to restart' ,
            { fontSize : '50px', fill: '#F0F0F0'});
        restartLabel.anchor.setTo(0.5, 0.5);

        var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        enterkey.onDown.addOnce(this.restart, this);

    },

    restart: function() {
        game.state.start('menu');
        music.stop();
        level.reset();
    }
}
