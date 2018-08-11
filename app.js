/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

    var activePlayer, currentScore, finalScore, gamePlaying, dice;

    
//Step 1: Start the game
init();

//Step 2: Roll the dice
document.querySelector(".btn-roll").addEventListener("click",RollTheDice);

//Step 3: Hold the score
document.querySelector('.btn-hold').addEventListener("click", function(){
    finalScore[activePlayer]+= currentScore;
    document.getElementById('score-' + activePlayer).textContent = finalScore[activePlayer];
    currentScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = 0;
    document.querySelector(".dice").style.display = "none";
    winner();  

})

// Step 4: Restart the game
document.querySelector('.btn-new').addEventListener("click", init);


function RollTheDice() {
    dice = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".dice").src =("images/dice-" + dice + ".png");
    document.querySelector(".dice").style.display = "block";
    if (dice !== 1){
        currentScore+= dice;
        document.querySelector("#current-" + activePlayer).textContent = currentScore;
    } else {
        document.querySelector(".dice").style.display = "none";
        currentScore = 0;
        document.querySelector("#current-" + activePlayer).textContent = currentScore;
        currentPlayer();
        

    }

}
    

function currentPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

}

function init() {
    document.querySelector(".dice").style.display = "none";
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector("#name-0").textContent =("Player 1");
    document.querySelector("#name-1").textContent =("Player 2");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    activePlayer = 0;
    currentScore = 0;
    finalScore = [0, 0];

}


function winner() {
    if (finalScore[activePlayer]>= 100) {
        document.querySelector("#name-"+ activePlayer).textContent = "Winner!";
        document.querySelector(".player-"+ activePlayer+ "-panel").classList.add("winner");
        document.querySelector(".player-"+ activePlayer+ "-panel").classList.remove("active");

        
    } else {
        currentPlayer();
        
    }
}



