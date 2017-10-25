var winState = {

    create: function () {

        let winText = game.add.text(game.world.width/2, 100, 'You win!', { fontSize : '50px', fill: '#F0F0F0'});
    	winText.anchor.setTo(0.5, 0.5);
    }
}
