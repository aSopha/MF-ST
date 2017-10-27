var loadState = {

    preload: function() {
        game.load.image('background', 'assets/ghostBackground.jpg');
        game.load.image('wartortle', 'assets/Wartortle.png');
        game.load.image('ball', 'assets/ball.png');
        game.load.image('papiShot', 'assets/papiball.png');
        game.load.image('miia', 'assets/miia4.png');
        game.load.image('papi', 'assets/papi.png');
    	game.load.image('coin', 'assets/mistycoin.png');
    	game.load.image('drop', 'assets/mistycoinDrop.png');
    	game.load.image('button', 'assets/button.png');
        game.load.image('coinParticle', 'assets/coinParticle.png');
        game.load.image('deathParticle', 'assets/bluespark.png');

        game.load.image('musicOn', 'assets/musicOn.png');
        game.load.image('musicOff', 'assets/musicOff.png');
        game.load.image('sfxOn', 'assets/audioOn.png');
        game.load.image('sfxOff', 'assets/audioOff.png');

        game.load.audio('meow', 'assets/audio/meowing.wav');
        game.load.audio('music', 'assets/audio/menu.mp3');
    },

    create: function() {
        game.state.start('menu');
    }
}
