class Level {
    constructor(level) {
        if(level===undefined) {
            this.currentLevel = 0;
        } else {
            this.currentLevel = level;
        }
        this.killCount = 0;
        this.enemyCount = [10,15,20,25,30];
        this.levelCount = 5;
        this.enemiesRemaining = this.enemyCount[this.currentLevel];
        this.over = false;
        //console.log('current level: ' + this.currentLevel + 'enemies remaining' + this.enemiesRemaining);
    }

    nextLevel() {
        this.currentLevel++;
        if(this.currentLevel >= this.levelCount) {
            game.state.start('win');
        }
        this.enemiesRemaining = this.enemyCount[this.currentLevel];
        this.killCount = 0;
        this.over = true;
        console.log('next level');
    }

    get level() {
        return this.currentLevel;
    }

    //Return
    get enemiesThisLevel() {
        return this.enemyCount[this.currentLevel];
    }


}
