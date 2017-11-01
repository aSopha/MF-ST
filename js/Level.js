class Level {
    constructor(level) {
        if(level===undefined) {
            this.currentLevel = 0;
        } else {
            this.currentLevel = level;
        }
        this.killCount = 0;
        this.enemyCount = [
            [10, 2, 0],
            [15, 3, 0],
            [15, 4, 5],
            [30, 4, 0],
            [40, 4, 3],
            [40, 6, 5],
            [40, 8, 10],
            [40,10, 20],
            [40,10, 20],
            [40,10, 20]
        ];
        this.maxActive = [
            [5, 2, 10],
            [10, 2, 10],
            [15, 2, 10],
            [15, 3, 10],
            [20, 3, 10],
            [20, 4, 10],
            [25, 5, 10],
            [30, 5, 10],
            [35, 6, 15],
            [40, 6, 20]
        ];
        this.spawnrateMultiplier = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1.5, 1, 1],
            [1.5, 1, 1],
            [1.5, 1.25, 1],
            [1.5, 1.5, 2],
            [1.5, 2, 2],
            [1.5, 2.5, 2.5],
            [1.5, 3, 3],
        ];
        this.enemyTypeRemaining = this.fillEnemyTypeCount();
        this.enemiesRemaining = this.getEnemyCount();
        this.levelCount = 10;
        this.over = false;
        //console.log('current level: ' + this.currentLevel + 'enemies remaining' + this.enemiesRemaining);
    }

    getEnemyCount() {
        let result = 0;
        for(let i = 0; i < 3; i++) {
            result += this.enemyCount[this.currentLevel][i];
        }
        return result;
    }

    getMaxPapiCount() {
        return this.maxActive[this.currentLevel][1];
    }

    fillEnemyTypeCount() {
        let result = [];
        for(let i = 0; i < this.enemyCount.length; i++) {
            let temp = []
            for(let j = 0; j < this.enemyCount[i].length; j++) {
                //console.log('pushing : ' + this.enemyCount[i][j]);
                temp.push(this.enemyCount[i][j]);
            }
            result.push(temp);
        }

        for(let i = 0; i < this.enemyCount.length; i++) {
            //console.log('inside is : ' + result[i]);
        }
        return result;
    }
    nextLevel() {
        if(this.currentLevel >= (this.levelCount - 1)) {
            console.log('win');
            game.time.events.add(1000, this.gotoWin, this);
            //game.state.start('win');
        } else {
            this.currentLevel++;
            this.enemiesRemaining = this.getEnemyCount();
            this.killCount = 0;
            this.over = true;
            console.log('next level');
        }
    }

    get level() {
        return this.currentLevel;
    }

    //Return
    get enemiesThisLevel() {
        return this.getEnemyCount();
    }

    reset() {
        this.enemyTypeRemaining = this.fillEnemyTypeCount();
        this.currentLevel = 0;
        this.killCount = 0;
        this.enemiesRemaining = this.getEnemyCount();
        this.over = false;
    }

    gotoWin() {
        game.state.start('win');
    }
}
