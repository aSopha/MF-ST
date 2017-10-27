var menuState = {

    create: function() {

        music = game.add.audio('music');

        music.loopFull();
        if(musicMuted) {
            music.volume = 0;
        } else {
            music.volume = .3;
        }

        console.log('yeahh');

        //  A simple background for the game
        game.add.sprite(0, 0, 'background');

        let nameLabel = game.add.text(game.world.width/2, 80, 'Game Title',
            { fontSize : '50px', fill: '#F0F0F0'});
        nameLabel.anchor.setTo(0.5, 0.5);

        let startLabel = game.add.text(game.world.width/2, 160, 'Press Enter to start' ,
            { fontSize : '50px', fill: '#F0F0F0'});
        startLabel.anchor.setTo(0.5, 0.5);

        var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        enterkey.onDown.addOnce(this.start, this);


        drawSfxButton();
        drawMusicButton();

    },

    start: function() {
        game.state.start('play');
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
