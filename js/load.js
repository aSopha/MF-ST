var loadState = {

    preload: function() {
        game.load.image('background', 'assets/ghostBackground.png');
        game.load.image('player', 'assets/player.png');
        game.load.image('ball', 'assets/ball.png');
        game.load.image('papiShot', 'assets/papiball.png');
        game.load.image('miia', 'assets/miia4.png');
        game.load.image('papi', 'assets/papi.png');
    	game.load.image('coin', 'assets/mistycoin.png');
    	game.load.image('drop', 'assets/mistycoinDrop.png');
    	game.load.image('button', 'assets/button.png');
        game.load.image('graybutton', 'assets/graybutton.png');
        game.load.image('coinParticle', 'assets/coinParticle.png');
        game.load.image('deathParticle', 'assets/bluespark.png');

        game.load.spritesheet('fail', 'assets/omgfail.png', 276, 225);
        game.load.spritesheet('yeahOk', 'assets/jlaw-okay.png', 245, 285);
        game.load.spritesheet('jumprope', 'assets/jumprope.png', 300, 170);
        game.load.spritesheet('headshot', 'assets/headshot.png', 300, 169);
        game.load.spritesheet('headshake', 'assets/headshake.png', 200, 113);
        game.load.spritesheet('deerheadbutt', 'assets/deerheadbutt.png', 300, 170);

        game.load.image('musicOn', 'assets/musicOn.png');
        game.load.image('musicOff', 'assets/musicOff.png');
        game.load.image('sfxOn', 'assets/audioOn.png');
        game.load.image('sfxOff', 'assets/audioOff.png');

        game.load.audio('meow', 'assets/audio/meowing.wav');
        game.load.audio('upgrade', 'assets/audio/armorUp.wav');
        game.load.audio('shot1', 'assets/audio/shot.wav');

        game.load.audio('music', 'assets/audio/menu.mp3');
    },

    create: function() {
        music = game.add.audio('music');

        //Disable Right click
        game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

        music.loopFull();
        if(musicMuted) {
            music.volume = 0;
        } else {
            music.volume = .25;
        }
        game.state.start('menu');
    }
}
