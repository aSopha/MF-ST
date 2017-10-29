var bootState = {

    preload: function() {

    },

    create: function () {

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        

        this.game.stage.backgroundColor = '#0F0F0F';

        // Calling load state
        game.state.start('load');
    }


}
