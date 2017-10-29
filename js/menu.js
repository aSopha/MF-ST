var menuState = {

    create: function() {


        music.loopFull();
        if(musicMuted) {
            music.volume = 0;
        } else {
            music.volume = .25;
        }

        console.log('yeahh');

        //  A simple background for the game
        game.add.sprite(0, 0, 'background');

        let MoveLabel = game.add.text(game.world.width/2, 70, 'Move Fast',
            { fontSize : '50px', fill: '#F0F0F0'});
        MoveLabel.anchor.setTo(0.5, 0.5);
        let andLabel = game.add.text(game.world.width/2, 120, '&',
            { fontSize : '50px', fill: '#F0F0F0'});
        andLabel.anchor.setTo(0.5, 0.5);
        let ShootLabel = game.add.text(game.world.width/2, 170, 'Shoot Things',
            { fontSize : '50px', fill: '#F0F0F0'});
        ShootLabel.anchor.setTo(0.5, 0.5);

        //let startLabel = game.add.text(game.world.width/2, game.world.height-100, 'Press Enter to start' ,
        //    { fontSize : '30px', fill: '#F0F0F0'});
        //startLabel.anchor.setTo(0.5, 0.5);

        let startButton = game.add.button(game.world.width/2, game.world.height-200, 'startButtonSprites', this.start, this,  0, 1 , 2);
        startButton.smoothed = false;
    	startButton.anchor.setTo(0.5, 0);
        var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        enterkey.onDown.addOnce(this.start, this);


        drawSfxButton();
        drawMusicButton();

    },

    start: function() {
        game.state.start('play');
        music.stop();
    }


};
function toggleMusic() {
    if(musicMuted) {
        music.volume = .3;
        musicMuted = false;
        musicButton.pendingDestroy = true;
        drawMusicButton();
    } else {
        musicMuted = true;
        music.volume = 0;
        musicButton.pendingDestroy = true;
        drawMusicButton();
    }
}

function toggleSfx() {
    if(sfxMuted) {
        sfxMuted = false;
        sfxButton.pendingDestroy = true;
        drawSfxButton()
    } else {
        sfxMuted = true;
        sfxButton.pendingDestroy = true;
        drawSfxButton()
    }
}

function drawSfxButton() {
    if(sfxMuted) {
        sfxButton = game.add.button(20, game.world.height - 80, 'sfxOff', toggleSfx);
    } else {
        sfxButton = game.add.button(20, game.world.height - 80, 'sfxOn', toggleSfx);
    }
}

function drawMusicButton() {
    if(musicMuted) {
        musicButton = game.add.button(110, game.world.height - 80, 'musicOff', toggleMusic);
    } else {
        musicButton = game.add.button(110, game.world.height - 80, 'musicOn', toggleMusic);
    }
}
