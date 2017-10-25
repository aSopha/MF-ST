var shopState = {

    create: function() {

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        levelText = game.add.text(8, 0, 'Level: 0', { fontSize : '50px', fill: '#F0F0F0'});
        updateLevelText();
    	levelText.anchor.setTo(0,0);

        currencyText = game.add.text(55, 10, '', { fontSize : '20px', fill: '#F0F0F0'});
        var currencyPic = game.add.sprite(8, 60, 'coin');
    	currencyPic.addChild(currencyText);
        updateCurrency();

        let leaveText = game.add.text(game.world.width/2, 100, 'Hit Enter to Leave!', { fontSize : '50px', fill: '#F0F0F0'});
    	leaveText.anchor.setTo(0.5, 0.5);


        fireRateButton = game.add.button(250, 20, 'button', buyFireRate);
        fireSpeedButton = game.add.button(350, 20, 'button', buyFireSpeed);
        playerSpeedButton = game.add.button(450, 20, 'button', buyPlayerSpeed);
        //button = game.add.button(550, 20, 'button');
        //button = game.add.button(650, 20, 'button');
        //button = game.add.button(750, 20, 'button');
    //    button = game.add.button(850, 20, 'button');

        this.spaceKey.onDown.addOnce(this.start, this);
    },

    update: function() {

    },

    start: function() {
        game.state.start('play');
        level.over = false;
    }
}

function buyFireRate() {
    if(player.spendCurrency(1)) {
        weapon.setFireRate(weapon.fireRate*.9);
        console.log(weapon.fireRate);
    }
}

function buyFireSpeed() {
    if(player.spendCurrency(1)) {
        weapon.setFireSpeed(weapon.fireSpeed*1.1);
        console.log(weapon.fireSpeed);
    }
}

function buyPlayerSpeed() {
    if(player.spendCurrency(1)) {
        player.setSpeed(player.speed + 30);
        console.log(player.speed);
    }
}
