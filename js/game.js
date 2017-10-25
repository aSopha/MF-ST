let game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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

let fx;

function preload() {

}

function create() {

}

function update() {

}

function updateCurrency() {
	currencyText.text = ': ' + player.currency;
}


/*

*/
