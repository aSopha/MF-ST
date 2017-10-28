let game = new Phaser.Game(1200, 600, Phaser.AUTO, 'my-game', { preload: preload, create: create, update: update });

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('shop', shopState);
game.state.add('gameOver', overState);
game.state.add('win', winState);

game.state.start('boot');

//let currency = 0;
let currencyText;
let levelText;

let level = new Level();
let player = new Player();
let weapon = new Weapon();
let baddies = new Baddies();

let pickUpSound;
let music;
let musicMuted = false;
let sfxMuted = false;
let sfxButton;
let musicButton;

//Weapon upgrade Prices
let weaponTypePrices;
//Store Prices
let standardPrices;

let fireRateText;
let fireSpeedText;
let playerSpeedText;
let weaponUpgradeText;

let fireRateLevelText;
let fireSpeedLevelText;
let playerSpeedLevelText;
let weaponTypeText;
function preload() {

}

function create() {


}

function update() {

}

function updateCurrency() {
	currencyText.text = ': ' + player.currency;
}

function createButton(x, y, name, functionCalled, picture) {

	let button = game.add.button(x, y, picture, functionCalled);
    button.name = name;
    button.smoothed = false;

    let text = game.add.text(x, y + 6,  name, { fontSize : '15px', fill: '#F0F0F0'});
    text.x += (button.width / 2) - (text.width / 2);

	let price = game.add.text(x, y + 55,  '  ', { fontSize : '15px', fill: '#F0F0F0'});
    price.x += (button.width / 2) - (price.width / 2);
	return price;
}


/*

*/
