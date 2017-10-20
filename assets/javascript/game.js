// Hangman Game - Star Wars Style

// Game Object

let game = {
	// Function for when user clicks on a character and checks against the correct phrase
	checkCharacter: function() {
		character.onclick = function() {
			let userPick = (this.innerHTML);
			this.setAttribute('class', 'active');
			this.onclick = null;
			for (var i = 0; i < phrase.length; i++) {
				if (phrase[i] === userPick) {
					userGuesses[i].innerHTML = userPick;
					points++;
					counter++;
					view.updateStats();
				}
			}
			// incorrect guesses
			let j = (phrase.indexOf(userPick));
			if (j === -1 ) {
				numberOfGuesses--;
				points--;
				view.updateStats();

			}
			// solved phrase
			for (var i = 0; i < userGuesses.length; i++) {
				if (counter + space === userGuesses.length) {
					points += 10;
					round++;
					view.alertWin();
					view.updateStats();
				}
			}
			// unsolved phrases after user uses all guesses available
			if (numberOfGuesses == 0) {
				points -= 10;
				lives--;
				view.alertLoss();
				view.updateStats();
			}
			// points bonus for completing 5 rounds
			if (round == 6 && bonus == false) {
				points += 25;
				view.alertBonus25();
			}
			// setting the bonus to false so bonus points do not keep being given
			if (round == 7) {
				bonus = false;
			}
			// points and extra life bonus after completing 10 rounds of the game
			if (round == 11 && bonus == false) {
				points += 50;
				lives++;
				view.alertBonus50();
			}
			if (round == 12) {
				bonus = false;
			}
			if (round == 16 && bonus == false) {
				points += 100;
				view.alertBonus100();
			}
			if (round == 17) {
				bonus = false;
			}
			if (round == 21 && bonus == false) {
				points += 150;
				lives++;
				view.alertBonus150();
			}
			if (round == 26) {
				points += 200;
				view.alertJediMaster();
			}
			// Game over if user runs out of lives
			if (lives == 0) {
				view.alertGameOver();
			}
		}
	},


	// Function to start playing of a round
	startRound: function() {
		chosenPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
		//phrase = phrase.replace(/\s/g, "-");
		phrase = chosenPhrase.phrase;
		category = chosenPhrase.category;
		hint = chosenPhrase.hint;
		//console.log(chosenPhrase.phrase);
		//console.log(chosenPhrase.category);
		console.log(chosenPhrase.hint)
		view.alphaNumericButtons();
		userGuesses = [];
		numberOfGuesses = 7;
		counter = 0;
		space = 0;
		bonus = false;
		view.displayCategory();
		view.displayPhrase();
		// displayHint();
		view.updateStats();
	},

	// Function to Move the contents of usedPhrases array back into phraseArray so that a new game can begin.
	clearArrays: function() {
		phraseArray.push(...usedPhrases);
		usedPhrases = [];
	},

	// Reset Game to orginal settings
	resetGame: function() {
		view.clearGameArea();
		this.clearArrays();
		this.startRound();
		points = 0;
		lives = 3;
		round = 1;
		view.updateStats();
	}

};

