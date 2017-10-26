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

    fire(player) {
        if (game.time.now > this.nextFire)
        {
            let angle = game.physics.arcade.angleToPointer(player.player)
            angle *= 57.295;
            this.nextFire = game.time.now + this.fireRate;
            let ball = this.shots.getFirstDead();
            ball.reset(player.xPos, player.yPos);
    		ball.anchor.setTo(0.5, 0.5);
            ball.game.physics.arcade.velocityFromAngle(angle, this.fireSpeed, ball.body.velocity);
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
