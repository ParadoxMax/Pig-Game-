/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, winning;

// Game initialisation
init();

document.querySelector('#dice1').style.display = 'none'; //hide the dice at the beginning
document.querySelector('#dice2').style.display = 'none'; //hide the dice at the beginning



document.querySelector('.btn-roll').addEventListener('click', function(){

  //1. Choose a random number
  var dice_1 = Math.floor((Math.random()*6) + 1); //have a number between 1 and 6
  var dice_2 = Math.floor((Math.random()*6) + 1); //have a number between 1 and 6
 console.log(dice_1, dice_2);
  //2. Display the result on the dice
  var diceDOM1 = document.querySelector('#dice1');
  diceDOM1.style.display = 'block';
  diceDOM1.src= 'dice-' + dice_1 + '.png';

  var diceDOM2 = document.querySelector('#dice2');
  diceDOM2.style.display = 'block'
  diceDOM2.src= 'dice-' + dice_2 + '.png';
  
  //3.  Update the round score if the rolled number was not a one
  if (dice_1 !== 1 && dice_2 !== 1 ) {
     //Add dice number to the score
     roundScore += dice_1 += dice_2;
     document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
     //Next player's turn 
    nextPlayer();
  }
}); //the second argument is used as a hidden function


//4. Holding the score
document.querySelector('.btn-hold').addEventListener('click', function () {
 // Add the current score to the global score
 scores[activePlayer] += roundScore;

 // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

 // Check if player won
   if (scores[activePlayer] >= winning ){
     // Declaring winner condition
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('player-' + activePlayer + '-panel').classList.add('Winner');
       document.querySelector('player-' + activePlayer + '-panel').classList.remove('active');
   } else {
     //Next player's turn 
     nextPlayer();
   }
});
   
 //5. Game Initialisation
document.querySelector('.btn-new').addEventListener('click', init);




// Next player DRY
function nextPlayer() {
//Next player's turn 
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 //ternary expression used to switch players
roundScore = 0; //reset the score to 0
document.getElementById('current-0').textContent = '0'; //reset the score on the player 1 UI to 0
document.getElementById('current-1').textContent = '0'; //reset the score on the player 2 UI to 0
document.querySelector('.player-0-panel').classList.toggle('active'); //remove/add instantly the layout of active player from/to player 1 UI
document.querySelector('.player-1-panel').classList.toggle('active'); //remove/add instantly the layout of active player from/to the player 2 UI
  //hide the dice once it is 1
document.querySelector('#dice1').style.display = 'none';
document.querySelector('#dice2').style.display = 'none';
};


 // initialisation function DRY
 function init(){
    scores = [0,0]; //the array is zero based so we need the 0 for first element and one for the second element
    roundScore = 0;
    activePlayer = 0; //0 will be the first player and 1 is the second player and will be used to read the scores out of the array
    
    document.querySelector('#dice1').style.display = 'none';//hide the dice once it is 1
    document.querySelector('#dice2').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

 }
// Next player turn
nextPlayer();
if (document.querySelector('#NewGoal') > 100) {
  winning = input;
} else {
  winning = 100;
}


// Additional Infos--------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//document.querySelector('#current-' + activePlayer).innerHTML = dice //another way to input the dice value to the current score

//document.querySelector('#current-' + activePlayer).textContent = dice; //A value setter--------------------------------------------------------
//x = document.querySelector('#score-' + activePlayer).textContent; //declaring an X variable to store the value of the score //A value getter---
//-------------------------------------------------------------------------------------------------