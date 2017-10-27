var shopState = {


    create: function() {


        //Weapon upgrade Prices
        weaponTypePrices = [5,10,15];
        //Store Prices
        standardPrices = [1,1,2,2,3,4,5,6,7,10,25, 'x'];
        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        levelText = game.add.text(8, 0, 'Level: 0', { fontSize : '50px', fill: '#F0F0F0'});
        updateLevelText();
    	levelText.anchor.setTo(0,0);

        currencyText = game.add.text(55, 10, '', { fontSize : '20px', fill: '#F0F0F0'});
        var currencyPic = game.add.sprite(8, 60, 'coin');
    	currencyPic.addChild(currencyText);
        updateCurrency();

        let leaveText = game.add.text(game.world.width/2, game.world.height - 100, 'Hit Space to Continue!', { fontSize : '50px', fill: '#F0F0F0'});
    	leaveText.anchor.setTo(0.5, 0.5);

        fireRateText = createButton(250, 20, 'Fire Rate\nUpgrade', this.buyFireRate, 'button');
        fireSpeedText = createButton(350, 20, 'Projectile\n  Speed', this.buyFireSpeed, 'button');
        playerSpeedText = createButton(450, 20, 'Player\nSpeed', this.buyPlayerSpeed, 'button');
        if(!weapon.isMax()) {
            weaponUpgradeText = createButton(550, 20, 'Weapon\nUpgrade', this.buyWeaponUpgrade, 'button');
        }

        updatePrice(fireRateText, standardPrices[weapon.getFireRateLevel()]);
        updatePrice(fireSpeedText, standardPrices[weapon.getFireSpeedLevel()]);
        updatePrice(playerSpeedText, standardPrices[player.getSpeedLevel()]);
        updatePrice(weaponUpgradeText, weaponTypePrices[weapon.getWeaponType()]);

        this.spaceKey.onDown.addOnce(this.start, this);
    },

    update: function() {

    },

    start: function() {
        game.state.start('play');
        level.over = false;
    },

    buyFireRate: function() {
        let upgradeLevel = weapon.getFireRateLevel();
        if(upgradeLevel >= weapon.maxFireRateLevel) {
            return;
        }
        if(player.spendCurrency(standardPrices[upgradeLevel++])) {
            weapon.setFireRate(weapon.getFireRateLevel()+1);
            updatePrice(fireRateText, standardPrices[upgradeLevel]);
        }
    },

    buyFireSpeed: function() {
        let upgradeLevel = weapon.getFireSpeedLevel();
        if(upgradeLevel >= weapon.maxFireSpeedLevel) {
            return;
        }
        if(player.spendCurrency(standardPrices[upgradeLevel++])) {
            weapon.setFireSpeed(weapon.getFireSpeedLevel()+ 1);
            updatePrice(fireSpeedText, standardPrices[upgradeLevel]);
        }
    },

    buyPlayerSpeed: function() {
        let upgradeLevel = player.getSpeedLevel();
        if(upgradeLevel >= player.maxSpeedLevel) {

            return;
        }
        if(player.spendCurrency(standardPrices[upgradeLevel++])) {
            player.setSpeed(player.getSpeedLevel() + 1);
            updatePrice(playerSpeedText, standardPrices[upgradeLevel]);
        }
    },

    buyWeaponUpgrade: function() {
        let upgradeLevel = weapon.getWeaponType();
        if(!weapon.isMax() && player.spendCurrency(weaponTypePrices[upgradeLevel++])) {
            if(!weapon.upgradeWeapon()) {
                createButton(550, 20, 'Weapon\nUpgrade', this.buyWeaponUpgrade, 'graybutton');
            }
            updatePrice(weaponUpgradeText, weaponTypePrices[upgradeLevel]);
        }
    }
}

function updatePrice(priceText, text) {
    priceText.text = text;
}
