var loadState = {

    preload: function() {

        loadText = game.add.text(game.world.width/2, 100, 'LOADING', { fontSize : '50px', fill: '#F0F0F0'});
    	loadText.anchor.setTo(0.5, 0.5);

        game.load.onFileComplete.add(fileComplete, this);

        //let filepath = './PhaserGame';
        let filepath = '';

        game.load.image('background', filepath + 'Assets/ghostBackground.png');
        game.load.image('storeBackground', filepath + 'Assets/storeBackground.png');
        game.load.image('player', filepath + 'Assets/player.png');
        game.load.image('ball', filepath + 'Assets/ball.png');
        game.load.image('papiShot', filepath + 'Assets/papiball.png');
        game.load.image('miia', filepath + 'Assets/miia4.png');
        game.load.image('papi', filepath + 'Assets/papi.png');
    	game.load.image('coin', filepath + 'Assets/mistycoin.png');
    	game.load.image('drop', filepath + 'Assets/mistycoinDrop.png');
    	game.load.image('button', filepath + 'Assets/button.png');
        game.load.image('onClickButton', filepath + 'Assets/onClickButton.png');
        game.load.image('graybutton', filepath + 'Assets/graybutton.png');
        game.load.image('coinParticle', filepath + 'Assets/coinParticle.png');
        game.load.image('deathParticle', filepath + 'Assets/bluespark.png');
        game.load.image('hitParticle', filepath + 'Assets/hitParticle.png');
        game.load.image('damageParticle', filepath + 'Assets/redspark.png');

        game.load.image('moveParticle0', filepath + 'Assets/particles/whitePuff00.png');
        game.load.image('moveParticle1', filepath + 'Assets/particles/whitePuff01.png');
        game.load.image('moveParticle2', filepath + 'Assets/particles/whitePuff02.png');
        game.load.image('moveParticle3', filepath + 'Assets/particles/whitePuff03.png');
        game.load.image('moveParticle4', filepath + 'Assets/particles/whitePuff04.png');

        game.load.spritesheet('fail', filepath + 'Assets/omgfail.png', 276, 225);
        game.load.spritesheet('yeahOk', filepath + 'Assets/jlaw-okay.png', 245, 285);
        game.load.spritesheet('jumprope', filepath + 'Assets/jumprope.png', 300, 170);
        game.load.spritesheet('headshot', filepath + 'Assets/headshot.png', 300, 169);
        game.load.spritesheet('headshake', filepath + 'Assets/headshake.png', 200, 113);
        game.load.spritesheet('deerheadbutt', filepath + 'Assets/deerheadbutt.png', 300, 170);
        game.load.spritesheet('buttonsprites', filepath + 'Assets/buttonsprites.png', 75, 53);
        game.load.spritesheet('startButtonSprites', filepath + 'Assets/startButton.png', 202, 55);
        game.load.spritesheet('restartButtonSprites', filepath + 'Assets/restartButton.png', 243, 48);

        game.load.image('musicOn', filepath + 'Assets/musicOn.png');
        game.load.image('musicOff', filepath + 'Assets/musicOff.png');
        game.load.image('sfxOn', filepath + 'Assets/audioOn.png');
        game.load.image('sfxOff', filepath + 'Assets/audioOff.png');

        game.load.audio('meow0', filepath + 'Assets/Audio/meowing.wav');
        game.load.audio('meow1', filepath + 'Assets/Audio/meowing1.wav');
        game.load.audio('meow2', filepath + 'Assets/Audio/meowing2.wav');
        game.load.audio('meow3', filepath + 'Assets/Audio/meowing3.wav');
        game.load.audio('upgrade', filepath + 'Assets/Audio/armorUp.wav');
        game.load.audio('error', filepath + 'Assets/Audio/errorSound.wav');
        game.load.audio('shot1', filepath + 'Assets/Audio/shot.wav');
        game.load.audio('hitSound', filepath + 'Assets/Audio/hitSound.wav');
        game.load.audio('playerDamage', filepath + 'Assets/Audio/playerDamage.wav');

        game.load.audio('music', filepath + 'Assets/Audio/menu.mp3');
        game.load.audio('playMusic', filepath + 'Assets/Audio/playMusic.mp3');
    },

    create: function() {
        music = game.add.audio('music');



        //Disable Right click
        game.canvas.oncontextmenu = function (e) { e.preventDefault(); }


        game.state.start('menu');
    }
}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	loadText.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);


}
