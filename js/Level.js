class Level {
    constructor(level) {
        if(level===undefined) {
            this.currentLevel = 0;
        } else {
            this.currentLevel = level;
        }
        this.killCount = 0;
        this.enemyCount = [
            [10, 2],
            [15, 4],
            [20, 6],
            [25, 8],
            [40, 10],
            [999,999]
        ];
        this.maxActive = [
            [5, 1],
            [10, 2],
            [10, 3],
            [15, 4],
            [25, 5],
            [25,25]
        ];
        this.enemyTypeRemaining = this.fillEnemyTypeCount();
        this.enemiesRemaining = this.getEnemyCount();
        this.levelCount = 6;
        this.over = false;
        //console.log('current level: ' + this.currentLevel + 'enemies remaining' + this.enemiesRemaining);
    }

    getEnemyCount() {
        let result = 0;
        for(let i = 0; i < 2; i++) {
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
                console.log('pushing : ' + this.enemyCount[i][j]);
                temp.push(this.enemyCount[i][j]);
            }
            result.push(temp);
        }

        for(let i = 0; i < this.enemyCount.length; i++) {
            console.log('inside is : ' + result[i]);
        }
        return result;
    }
    nextLevel() {
        this.currentLevel++;
        console.log(this.currentLevel);
        console.log(this.levelCount);
        if(this.currentLevel >= this.levelCount) {
            console.log('win');
            game.state.start('win');
        } else {
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


}
