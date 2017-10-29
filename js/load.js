var loadState = {

    preload: function() {
        game.load.image('background', 'assets/ghostBackground.png');
        game.load.image('storeBackground', 'assets/storeBackground.png');
        game.load.image('player', 'assets/player.png');
        game.load.image('ball', 'assets/ball.png');
        game.load.image('papiShot', 'assets/papiball.png');
        game.load.image('miia', 'assets/miia4.png');
        game.load.image('papi', 'assets/papi.png');
    	game.load.image('coin', 'assets/mistycoin.png');
    	game.load.image('drop', 'assets/mistycoinDrop.png');
    	game.load.image('button', 'assets/button.png');
        game.load.image('onClickButton', 'assets/onClickButton.png');
        game.load.image('graybutton', 'assets/graybutton.png');
        game.load.image('coinParticle', 'assets/coinParticle.png');
        game.load.image('deathParticle', 'assets/bluespark.png');
        game.load.image('hitParticle', 'assets/hitParticle.png');
        game.load.image('damageParticle', 'assets/redspark.png');

        game.load.image('moveParticle0', 'assets/particles/whitePuff00.png');
        game.load.image('moveParticle1', 'assets/particles/whitePuff01.png');
        game.load.image('moveParticle2', 'assets/particles/whitePuff02.png');
        game.load.image('moveParticle3', 'assets/particles/whitePuff03.png');
        game.load.image('moveParticle4', 'assets/particles/whitePuff04.png');

        game.load.spritesheet('fail', 'assets/omgfail.png', 276, 225);
        game.load.spritesheet('yeahOk', 'assets/jlaw-okay.png', 245, 285);
        game.load.spritesheet('jumprope', 'assets/jumprope.png', 300, 170);
        game.load.spritesheet('headshot', 'assets/headshot.png', 300, 169);
        game.load.spritesheet('headshake', 'assets/headshake.png', 200, 113);
        game.load.spritesheet('deerheadbutt', 'assets/deerheadbutt.png', 300, 170);
        game.load.spritesheet('buttonsprites', 'assets/buttonsprites.png', 75, 53);
        game.load.spritesheet('startButtonSprites', 'assets/startButton.png', 202, 55);
        game.load.spritesheet('restartButtonSprites', 'assets/restartButton.png', 243, 48);

        game.load.image('musicOn', 'assets/musicOn.png');
        game.load.image('musicOff', 'assets/musicOff.png');
        game.load.image('sfxOn', 'assets/audioOn.png');
        game.load.image('sfxOff', 'assets/audioOff.png');

        game.load.audio('meow0', 'assets/audio/meowing.wav');
        game.load.audio('meow1', 'assets/audio/meowing1.wav');
        game.load.audio('meow2', 'assets/audio/meowing2.wav');
        game.load.audio('meow3', 'assets/audio/meowing3.wav');
        game.load.audio('upgrade', 'assets/audio/armorUp.wav');
        game.load.audio('error', 'assets/audio/errorSound.wav');
        game.load.audio('shot1', 'assets/audio/shot.wav');
        game.load.audio('hitSound', 'assets/audio/hitSound.wav');
        game.load.audio('playerDamage', 'assets/audio/playerDamage.wav');

        game.load.audio('music', 'assets/audio/menu.mp3');
        game.load.audio('playMusic', 'assets/audio/playMusic.mp3');
    },

    create: function() {
        music = game.add.audio('music');

        let loadText = game.add.text(game.world.width/2, 100, 'LOADING', { fontSize : '50px', fill: '#F0F0F0'});
    	loadText.anchor.setTo(0.5, 0.5);

        //Disable Right click
        game.canvas.oncontextmenu = function (e) { e.preventDefault(); }


        game.state.start('menu');
    }
}
