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

var scores, roundScore, activePlayer,	dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6)	+	1;
// console.log(dice);

// select the id from the html
// js will use the activePlayer var and check the number of it -> type coercion
document.querySelector('#current-' + activePlayer).textContent = dice;

//! Example!
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// same as above but for reading:
var x = document.querySelector('#score-0').textContent;
console.log(x);


/**hiding the dice trought the js no css -> display:none */
// in js all styles are inline
document.querySelector('.dice').style.display = 'none';

function btn() {
	// do something
}
btn();

// there are a lot of event check MDN for more
// the second parameter is callback function
document.querySelector('.btn-roll').addEventListener('click', btn);




