

var shopState = {
    create: function() {
        //Weapon upgrade Prices
        weaponTypePrices = [5,10,'x'];
        //Store Prices
        standardPrices = [1,1,2,2,3,3,4,5,7,10,15, 'x'];
        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        levelText = game.add.text(8, 0, 'Level: 0', { fontSize : '50px', fill: '#F0F0F0'});
        updateLevelText();
    	levelText.anchor.setTo(0,0);

        shopText = game.add.text(600, 0, 'Shop', { fontSize : '50px', fill: '#F0F0F0'});
    	shopText.anchor.setTo(.25,0);

        currencyText = game.add.text(55, 10, '', { fontSize : '20px', fill: '#F0F0F0'});
        var currencyPic = game.add.sprite(8, 60, 'coin');
    	currencyPic.addChild(currencyText);
        updateCurrency();

        let leaveText = game.add.text(game.world.width/2, game.world.height - 100, 'Hit Space to Continue!', { fontSize : '30px', fill: '#F0F0F0'});
    	leaveText.anchor.setTo(0.5, 0.5);

        fireRateText = createButton(450, 60, 'Fire Rate\nUpgrade', this.buyFireRate, 'button');
        fireSpeedText = createButton(550, 60, 'Projectile\n  Speed', this.buyFireSpeed, 'button');
        playerSpeedText = createButton(650, 60, 'Player\nSpeed', this.buyPlayerSpeed, 'button');
        //if(!weapon.isMax()) {
            weaponUpgradeText = createButton(750, 60, 'Weapon\nUpgrade', this.buyWeaponUpgrade, 'button');
        //}

        fireRateLevelText = createUpgradeText(10, 120, 'Fire Rate');
        fireSpeedLevelText = createUpgradeText(10, 150, 'Fire Speed');
        playerSpeedLevelText = createUpgradeText(10, 180, 'Player Speed');
        weaponTypeText = createUpgradeText(10, 210, 'Weapon Type');

        updateText(fireRateLevelText, weapon.getFireRateLevel());
        updateText(fireSpeedLevelText, weapon.getFireSpeedLevel());
        updateText(playerSpeedLevelText, player.getSpeedLevel());
        updateText(weaponTypeText, weapon.getWeaponTypeName());

        updateText(fireRateText, standardPrices[weapon.getFireRateLevel()]);
        updateText(fireSpeedText, standardPrices[weapon.getFireSpeedLevel()]);
        updateText(playerSpeedText, standardPrices[player.getSpeedLevel()]);
        updateText(weaponUpgradeText, weaponTypePrices[weapon.getWeaponType()]);

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
            playUpgradeSound();
            updateText(fireRateText, standardPrices[upgradeLevel]);
            updateText(fireRateLevelText, weapon.getFireRateLevel());
        } else {
            playError();
        }
    },

    buyFireSpeed: function() {
        let upgradeLevel = weapon.getFireSpeedLevel();
        if(upgradeLevel >= weapon.maxFireSpeedLevel) {
            return;
        }
        if(player.spendCurrency(standardPrices[upgradeLevel++])) {
            weapon.setFireSpeed(weapon.getFireSpeedLevel()+ 1);
            playUpgradeSound();
            updateText(fireSpeedText, standardPrices[upgradeLevel]);
            updateText(fireSpeedLevelText, weapon.getFireSpeedLevel());
        } else {
            playError();
        }
    },

    buyPlayerSpeed: function() {
        let upgradeLevel = player.getSpeedLevel();
        if(upgradeLevel >= player.maxSpeedLevel) {

            return;
        }
        if(player.spendCurrency(standardPrices[upgradeLevel++])) {
            player.setSpeed(player.getSpeedLevel() + 1);
            playUpgradeSound();
            updateText(playerSpeedText, standardPrices[upgradeLevel]);
            updateText(playerSpeedLevelText, player.getSpeedLevel());
        } else {
            playError();
        }
    },

    buyWeaponUpgrade: function() {
        let upgradeLevel = weapon.getWeaponType();
        if(!weapon.isMax() && player.spendCurrency(weaponTypePrices[upgradeLevel++])) {
            if(!weapon.upgradeWeapon()) {
            }
            playUpgradeSound();
            updateText(weaponUpgradeText, weaponTypePrices[upgradeLevel]);
            updateText(weaponTypeText, weapon.getWeaponTypeName());
        } else {
            playError();
        }
    }
}

function updateText(priceText, text) {
    priceText.text = text;
}

function createUpgradeText(x,y, text) {
    let upgradeText = game.add.text(x, y, text + ': ', { fontSize : '20px', fill: '#F0F0F0'});
    let upgradeLevel = game.add.text(170, y, '0', { fontSize : '20px', fill: '#F0F0F0'});
    return upgradeLevel;
}
