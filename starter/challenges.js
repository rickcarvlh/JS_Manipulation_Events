//* The Pig Game

// Variables
//* gamePlaying is a state variable

var scores, roundScore, activePlayer, gamePlaying;

init();

// declared here because if not the value would be lost in the function
var lastDice;


// there are a lot of event check MDN for more
//* creation of a random number
document.querySelector('.btn-roll').addEventListener('click', function () {
	// this only happens if game is playing
	if (gamePlaying) {

		// Do something here Anomymous function - can't be called anywhere else

		//*1. Random Number
		// can not be acessed from the outside
		// we generate a dice number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		//*2. Display the results
		// * don't want this anymore
		// var diceDOM = document.querySelector('.dice');
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		// diceDOM.style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-1').src = 'dice-' + dice2 + '.png';


		
		//*3. Update the round score IF the rolled number was NOT a 1
		if (dice1 !== 1 && dice2 !== 1) {
			//Add Score
			roundScore += dice1 + dice2; //same has roundScore = roundScore + dice1  + dice2;
			// update the roundScore and display the roundScore
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next player
			// if it's 0 then activePlayer should be 1 else activePlayer should 0
			nextPlayer();

		}

		/*
		if (dice === 6 && lastDice === 6) {
			// Player looses score
			scores[activePlayer] = 0;
			//	Update the UI
			document.querySelector('#score-' + activePlayer).textContent = '0';
			// switch player
			nextPlayer();
		}
		// the dice number is checked
		else if (dice !== 1) {
			//! i believe this is correct it's hard to debug
			if (dice === lastDice) {
				lastDice = 0;
			}
			//Add Score
			roundScore += dice; //same has roundScore = roundScore + dice;
			// update the roundScore and display the roundScore
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next player
			// if it's 0 then activePlayer should be 1 else activePlayer should 0
			nextPlayer();

		}

		// we give the lastDice var the same as the last dice rolled.
		lastDice = dice;
		*/
	}


});

// Event Listener

document.querySelector('.btn-hold').addEventListener('click', function () {

	if (gamePlaying) {
		//	Add CURRENT score to GLOBAL score
		//* 	scores[activePlayer] = scores[activePlayer] + roundeScore; -> same thing
		scores[activePlayer] += roundScore;

		//	Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		var winningScore;
		// console.log(input);

		// undefiened , 0, null, or "" are COERCED to false
		// Anything else is COERCED to true
		if (input) {
			// store the value of input in the var
			winningScore = input;
		} else {
			winningScore = 100
		}


		//	Check if player won the game
		if (scores[activePlayer] >= winningScore) {
			// replace player name with winner
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			// remove active class from winner
			// document.querySelector('.dice').style.display = 'none';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			// classList gets acess to the classes of the element
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');

			// where we detect who won the the game -> stop it
			gamePlaying = false;

		} else {
			// if the game continues we want the next player to play
			//	Next 	Player 
			nextPlayer();
		}
	}

});

//! Don't repeat yourself
function nextPlayer() {
	// Next player
	// if it's 0 then activePlayer should be 1 else activePlayer should 0
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	//so the score doesn't add up when switching players 
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// this way it just toggles the classes . Changes between them
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// when a player rolls a one hide the dice again
	// document.querySelector('.dice').style.display = 'none';
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

}

// listen to an event->EventListener
//	New Game -> Reset player Scores(everything)
//	Call the function 
document.querySelector('.btn-new').addEventListener('click', init);



// function to initialize the game
function init() {

	//	scores for both players 
	scores = [0, 0];
	roundScore = 0;
	// the default player is 0
	activePlayer = 0;
	gamePlaying = true;

	/**hiding the dice trought the js no css -> display:none */
	// in js all styles are inline
	// document.querySelector('.dice').style.display = 'none';
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	// same as querySelector but faster
	//* setting everything to 0
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}