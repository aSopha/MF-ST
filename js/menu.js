var menuState = {

    create: function() {

        music = game.add.audio('music');

        //music.play();
        console.log('yeahh');

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        let nameLabel = game.add.text(game.world.width/2, 80, 'Game',
            { fontSize : '50px', fill: '#F0F0F0'});
        nameLabel.anchor.setTo(0.5, 0.5);

        let startLabel = game.add.text(game.world.width/2, 160, 'Press Enter to start' ,
            { fontSize : '50px', fill: '#F0F0F0'});
        startLabel.anchor.setTo(0.5, 0.5);

        var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        enterkey.onDown.addOnce(this.start, this);
    },

    start: function() {
        game.state.start('play');
    }
};
