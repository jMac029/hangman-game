// All of the view functions to be used in the game

// On Page Load
window.onload = () => {

	game.startRound();

};

let hintButton = document.getElementById("button_reveal_hint");
let hintRevealed = false;

// View object
let view = {

	// Function to Create AlphaNumeric Buttons on screen
	alphaNumericButtons: function() {
		characterButtons = document.getElementById('alphanumeric-buttons');
		characters = document.createElement('ul');

		for (var i = 0; i < alphaNumeric.length; i++) {
			characters.id = 'alphaNumeric';
			character = document.createElement('li');
			character.id = 'character';
			character.innerHTML = alphaNumeric[i];
			game.checkCharacter();
			characterButtons.appendChild(characters);
			characters.appendChild(character);	
		}
	},

	// Function to Display Phrase for that Round
	displayPhrase: function() {
		phraseDisplay = document.getElementById('phrase');
		correct = document.createElement('ul');

		for (var i = 0; i < phrase.length; i++) {
			correct.setAttribute('id', 'the-phrase');
			userGuess = document.createElement('li');
			userGuess.setAttribute('class', 'user-guess');
			// how to do will spaces and dashes in phrases
			if (phrase[i] === "-") {
				userGuess.innerHTML = "-";
				space++;
			} else if (phrase[i] === "'") {
				userGuess.innerHTML = "'";
				space++;
			} else if (phrase[i] === " ") {
				userGuess.innerHTML = " ";
				space++;
			} else {
				userGuess.innerHTML = "_";
			}
			// add user guesses to array to check with phrase
			userGuesses.push(userGuess);
			// append to the parent element to display phrase
			phraseDisplay.appendChild(correct);
			correct.appendChild(userGuess);
		}
	},

	// Update the stats
	updateStats: function() {
		let statsHtml = 
			"<ul>" +
			"<li>ROUND " + round + " OF 25</li>" +
			"<li>LIVES " + lives + "</li>" + 
			"<li>POINTS " + points + "</li>" +
			"<li>GUESSES LEFT " + numberOfGuesses + "</li>" +
			"<ul>";

			document.querySelector("#stats-bar").innerHTML = statsHtml;
	},

	// Display the Category above the Phrase
	displayCategory: function() {
		let categoryHtml = "<h1>" + category + "</h1>";
		document.querySelector("#category").innerHTML = categoryHtml;
	},

	// Reveal Hint costing User 1 guess
	displayHint: function() {
		if (hintRevealed == false) {
			let hintText = "<h1>" + hint + "</h1>";
			document.querySelector("#hint_area").innerHTML = hintText;
			sounds.fxChewy();
			numberOfGuesses--;
			points -= 5;
			this.updateStats();
			hintButton.disabled = true;
		} else {
			hintButton.disabled = false;
			hintButton.setAttribute('class', '');
		}
	},

	// Reset game area between rounds
	clearGameArea: function() {
		document.getElementById('hint_area').innerHTML = "";
		hintRevealed = false;
		hintButton.setAttribute('class', '');
		hintButton.disabled = false;
		document.getElementById('phrase').innerHTML = "";
		document.getElementById('alphanumeric-buttons').innerHTML = "";
	},

	// ALERTS
	alertWin: function() {
		alert("ONTO THE NEXT ROUND! THE PHRASE WAS: " + phrase + ". " + "YOU HAVE " + points + " POINTS. " + "THE FORCE IS STRONG WITH YOU.");
		this.clearGameArea();
		usedPhrases.push(chosenPhrase);
		phraseArray.splice(phraseArray.indexOf(chosenPhrase) , 1);
		game.startRound();
	},

	alertBonus25: function() {
		alert("YOU'VE REACHED ROUND 6 AND EARNED A 25 POINT BONUS! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		sounds.fxHanBadFeeling();
		this.updateStats();
	},

	alertBonus50: function() {
		alert("YOU'VE REACHED ROUND 11 AND EARNED A 50 POINT BONUS AND A EXTRA LIFE! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		sounds.fxLuke();
		this.updateStats();
	},

	alertBonus100: function() {
		alert("YOU'VE REACHED ROUND 16 AND EARNED A 100 POINT BONUS! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		sounds.fxHanCaptain();
		this.updateStats();
	},

	alertBonus150: function() {
		alert("YOU'VE REACHED ROUND 21 AND EARNED A 150 POINT BONUS AND AN EXTRA LIFE! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		sounds.fxDarthVader();
		this.updateStats();
	},

	alertLoss: function() {
		alert("YOU LOSE! THE PHRASE WAS: " + phrase + ". " + "YOU HAVE " + points + " POINTS. " + "REMEMBER, DO OR DO NOT, THERE IS NO TRY.");
		this.clearGameArea();
		usedPhrases.push(chosenPhrase);
		phraseArray.splice(phraseArray.indexOf(chosenPhrase) , 1);
		// console.log(usedPhrases);
		sounds.fxYoda();
		game.startRound();
	},

	alertJediMaster: function() {
		alert("YOU ARE A JEDI MASTER! WITH " + points + " POINTS. " + "THE FORCE IS STRONG WITH YOU. LET'S PLAY AGAIN!");
		game.resetGame();
	},

	alertGameOver: function() {
		alert("THE FORCE IS NOT STRONG WITH YOU...GAME OVER, WOULD YOU LIKE TO PLAY AGAIN?");
		sounds.fxJabba();
		game.resetGame();
	},
};