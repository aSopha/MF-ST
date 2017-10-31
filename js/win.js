var winState = {

    preload: function() {
        let winText = game.add.text(game.world.width/2, 100, 'You win!', { fontSize : '50px', fill: '#F0F0F0'});
    	winText.anchor.setTo(0.5, 0.5);


        let restartButton = game.add.button(game.world.width/2, 300, 'restartButtonSprites', this.restart, this,  0, 1 , 2);
        restartButton.smoothed = false;
    	restartButton.anchor.setTo(0.5, 0.5);
    },

    create: function () {





        let name = prompt("Please enter your name", "");
        postScore(name);

        var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        enterkey.onDown.addOnce(this.restart, this);
    },

    restart: function() {
        game.state.start('menu');
        resetEverything();
    }
}

function postScore(name) {
    fetch('scores', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': name,
            'score': score
        })
    })
}
