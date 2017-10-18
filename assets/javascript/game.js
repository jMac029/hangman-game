// Hangman Game - Star Wars Style

// Load the Game Elements when the page loads
window.onload = () => {

	// Global Variables
	let wins ; 
	let numberOfGuesses ;
	let phrase ;
	let character ;
	let userGuess ;
	let userGuesses = [];
	let space ;
	let lives ;
	let counter ;
	let levels ;

	//Global Constants

	const alphaNumeric = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
						"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
						"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	// array of Star Wars Phrases to choose from
	let phraseArray = [
						"ALDERAAN", 
						"BESPIN",
						"CORUSCANT",
						"ENDOR",
						"HOTH",
						"JAKKU",
						"JEDHA",
						"KASHYYYK",
						"SCARIF",
						"TATOONE",
						"YAVIN-4",
						"JEDI",
						"YODA",
						"LUKE-SKYWALKER",
						"ANAKIN-SKYWALKER",
						"DARTH-VADER",
						"HAN-SOLO",
						"PRINCESS-LEIA",
						"OBI-WON-KENOBI",
						"JAR-JAR-BINKS",
						"RD-D2",
						"C-3PO",
						"BB-8",
						"POE-DAMARON",
						"REY",
						"THE-FORCE",
						"THE-DARK-SIDE",
						"KYLO-REN",
						"CHEWBACA",
						"X-WING",
						"TIE-FIGHTER",
						"MILLENIUM-FALCON",
						"ROUGE-9"
					];


	// Function to Create AlphaNumeric Buttons on screen

	let alphaNumericButtons = () => {
		characterButtons = document.getElementById('alphanumeric-buttons');
		characters = document.createElement('ul');

		for (var i = 0; i < alphaNumeric.length; i++) {
			characters.id = 'alphaNumeric';
			character = document.createElement('li');
			character.id = 'character';
			character.innerHTML = alphaNumeric[i];
			checkCharacter();
			characterButtons.appendChild(characters);
			characters.appendChild(character);	
		}
	}



	// Function to Display Phrase for that Round

	let displayPhrase = () => {
		phraseDisplay = document.getElementById('phrase')
		correct = document.createElement('ul');

		for (var i = 0; i < phrase.length; i++) {
			correct.setAttribute('id', 'the-phrase');
			userGuess = document.createElement('li');
			userGuess.setAttribute('class', 'user-guess');
			if (phrase[i] === "-") {
				userGuess.innerHTML = " ";
				space = 1;
			} else {
				userGuess.innerHTML = "_";
			}

			userGuesses.push(userGuess);
			phraseDisplay.appendChild(correct);
			correct.appendChild(userGuess);
		}
	}

	// Function to capture clicks of items in the alphaNumeric items


	// Function for when user clicks on an item

	let checkCharacter = function() {
		character.onclick = function() {
			let userPick = (this.innerHTML);
			this.setAttribute('class', 'active');
			this.onclick = null;
			console.log(userPick);
			for (var i = 0; i < phrase.length; i++) {
				if (phrase[i] === userPick) {
					userGuesses[i].innerHTML = userPick;
					counter += 1;
				}
			}
			var j = (phrase.indexOf(userPick));
			if (j === -1 ) {
				numberOfGuesses -= 1;
			}
		}
	}

	// Function to start playing of a round

	let startRound = () => {

		phrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
		phrase = phrase.replace(/\s/g, "-");
		console.log(phrase);
		alphaNumericButtons();
		numberOfGuesses = 10;
		counter = 0;
		space = 0;
		displayPhrase();

	}

	startRound();

};