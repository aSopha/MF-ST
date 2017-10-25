class Player {
    constructor() {
        this.player
        this.speed = 300;
        this.currency = 0;
    }

    get xVelocity() {
        return this.player.body.velocity.x;
    }

    get yVelocity() {
        return this.player.body.velocity.y;
    }

    get xPos() {
        return this.player.x;
    }

    get yPos() {
        return this.player.y;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    //Move Up
    up() {
        this.player.body.velocity.y = -1*this.speed;
    }

    //Move Right
    right() {
        this.player.body.velocity.x = this.speed;
    }

    //Move Down
    down() {
        this.player.body.velocity.y = this.speed;
    }

    //Move Left
    left() {
        this.player.body.velocity.x = -1*this.speed;
    }

    //Stop the player
    stop() {
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
    }

    //Adjusts speed to diagonal
    diagonal() {
        this.player.body.velocity.y *= 0.709;
        this.player.body.velocity.x *= 0.709;
    }

    setup() {
        this.player = game.add.sprite(game.world.width/2, game.world.height/2, 'wartortle');
        this.player.anchor.setTo(0.5, 0.5);
    	game.physics.arcade.enable(this.player);
        this.player.body.width = 10;
        this.player.body.height = 10;
        this.player.body.offset.setTo(13,13);
    	this.player.enableBody = true;
    	this.player.physicsBodyType = Phaser.Physics.ARCADE;
    	this.player.body.collideWorldBounds = true;
    }

    spendCurrency(amountSpent) {
        if(amountSpent > this.currency) {
            console.log('not enough money');
            return false;
        } else {
            this.currency -= amountSpent;
            updateCurrency();
            return true;
        }
    }


}
