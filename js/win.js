var winState = {

    create: function () {

        let winText = game.add.text(game.world.width/2, 100, 'You win!', { fontSize : '50px', fill: '#F0F0F0'});
    	winText.anchor.setTo(0.5, 0.5);

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
        weapon.reset();
        player.reset();
    }
}
