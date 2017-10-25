class Weapon {
    constructor() {
        this.shots;
        this.fireRate = 300;
        this.fireSpeed = 300;
        this.nextFire = 0;
        this.weaponType = 0;
    }


    setup() {
        this.shots = game.add.group();
        this.shots.enableBody = true;
        this.shots.createMultiple(400, 'ball');
        this.shots.setAll('checkWorldBounds', true);
        this.shots.setAll('outOfBoundsKill', true);
    	this.shots.tracking = false;
    }

    fire() {
        if (game.time.now > this.nextFire)
        {
            this.nextFire = game.time.now + this.fireRate;
            let ball = this.shots.getFirstDead();
            ball.reset(player.xPos, player.yPos );
    		ball.anchor.setTo(0.5, 0.5);
            game.physics.arcade.moveToPointer(ball, this.fireSpeed);
    		ball.rotation = game.physics.arcade.angleToPointer(ball) + 1.6;
        }
    }

    setFireRate(newRate) {
        this.fireRate = newRate;
    }

    setFireSpeed(newSpeed) {
        this.fireSpeed = newSpeed;
    }

    setWeaponType(newType) {
        this.weaponType = newType;
    }
}
