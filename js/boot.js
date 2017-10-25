var bootState = {

    create: function () {

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Calling load state
        game.state.start('load');
    }
}
