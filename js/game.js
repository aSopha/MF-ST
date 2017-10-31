let game = new Phaser.Game(1200, 600, Phaser.AUTO, 'my-game', { preload: preload, create: create, update: update });

//Adding all of the different Game States
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('shop', shopState);
game.state.add('gameOver', overState);
game.state.add('win', winState);

//Starting the boot game state
game.state.start('boot');

//let currency = 0;
let currencyText;
let levelText;
let hpText;
let scoreText;


let level = new Level();
let player = new Player();
let weapon = new Weapon();
let baddies = new Baddies();

let postMenu = true;

let loadText;

let music;
let gameMusic;
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

let score = 0;
let nextDecrement = 0;
let decrementRate = 300;

function preload() {
}

function create() {
}

function update() {
}

function decrementScore() {
	if(game.time.now > nextDecrement) {
		nextDecrement = nextDecrement + decrementRate;
		if(!level.over) {
			console.log('uh huh');
		}
		score -= 1;
		if(score < 0) {
			score = 0;
		}
		updateScoreText();
	}
}

function updateCurrency() {
	currencyText.text = ': ' + player.currency;
}

function createButton(x, y, name, functionCalled, picture) {

	let button = game.add.button(x, y, picture, functionCalled, this,  1, 0 , 2);
    button.name = name;
    button.smoothed = false;
	button.anchor.setTo(0.5, 0);

    let text = game.add.text(-38, 6,  name, { fontSize : '15px', fill: '#F0F0F0'});
    text.x += (button.width / 2) - (text.width / 2);

	let price = game.add.text(x-20, y+57,  '  ', { fontSize : '15px', fill: '#F0F0F0'});
    price.x += (button.width / 2) - (price.width / 2);
	price.anchor.setTo(0.5, 0);

	let currencyIcon = game.add.sprite(-30, -1, 'drop');
	//button.addChild(price);
	button.addChild(text);
	price.addChild(currencyIcon);
	return price;

}

function playUpgradeSound() {
	if(!sfxMuted) {
		let upgradeSound = game.add.audio('upgrade');
		upgradeSound.volume = .3;
		upgradeSound.play();
	}
}

function playShot1() {
	if(!sfxMuted) {
		let shotSound = game.add.audio('shot1');
		shotSound.volume = .5;
		shotSound.play();
	}
}

function playError() {
	if(!sfxMuted) {
		let errorSound = game.add.audio('error');
		errorSound.volume = .5;
		errorSound.play();
	}
}

function playHit() {
	if(!sfxMuted) {
		let hitSound = game.add.audio('hitSound');
		hitSound.volume = .3;
		hitSound.play();
	}
}

function playDamage() {
	if(!sfxMuted) {
		let damageSound = game.add.audio('playerDamage');
		damageSound.volume = .5;
		damageSound.play();
	}
}

function playMeow() {
	let meows = ['meow0','meow1' ,'meow2' ,'meow3'];
	if(!sfxMuted) {
		rand = game.rnd.integerInRange(0,3);
		console.log(rand);
		let pickUpSound = game.add.audio(meows[rand]);
		pickUpSound.volume = 3;
		pickUpSound.play();
	}
}

function playGameMusic() {
	if(!musicMuted) {
		gameMusic = game.add.audio('playMusic');
		gameMusic.volume = .15;
		gameMusic.loopFull();
	}
}

function resetEverything() {
	postMenu = true;
	score = 0;
	gameMusic.stop();
	level.reset();
	weapon.reset();
	player.reset();
}
