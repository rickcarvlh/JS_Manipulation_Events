/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//* The Pig Game

// Variables

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;


/**hiding the dice trought the js no css -> display:none */
// in js all styles are inline
document.querySelector('.dice').style.display = 'none';

// same as querySelector but faster
//* setting everything to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



// there are a lot of event check MDN for more
document.querySelector('.btn-roll').addEventListener('click', function() {
	// Do something here Anomymous function - can't be called anywhere else

	//*1. Random Number
	// can not be acessed from the outside
	var dice = Math.floor(Math.random() * 6) + 1;

	//*2. Display the results
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';


	//*3. Update the round score IF the rolled number was NOT a 1
	
});




// dice = Math.floor(Math.random() * 6)	+	1;
// console.log(dice);

// select the id from the html
// js will use the activePlayer var and check the number of it -> type coercion
// document.querySelector('#current-' + activePlayer).textContent = dice;


//! Example!
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// same as above but for reading:
// var x = document.querySelector('#score-0').textContent;
// console.log(x);