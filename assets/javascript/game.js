// Hangman Game - Star Wars Style

// Load the Game Elements when the page loads
window.onload = () => {

	// Variables
	let wins ; 
	let numberOfGuesses = 7 ;
	let phrase ;
	let character ;
	let userGuess ;
	let userGuesses = [];
	let space ;
	let lives = 3;
	let counter ;
	let level = 1;

	// Constants

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
						"TATOOINE",
						"YAVIN-4",
						"NABOO",
						"DAGOBAH",
						"JEDI",
						"SITH",
						"YODA",
						"LUKE SKYWALKER",
						"ANAKIN SKYWALKER",
						"DARTH VADER",
						"HAN SOLO",
						"LANDO CALRISSIAN",
						"PRINCESS LEIA",
						"PADME AMIDALA",
						"WEDGE ANTILLES",
						"OBI-WAN KENOBI",
						"JAR-JAR BINKS",
						"R2-D2",
						"C-3PO",
						"BB-8",
						"K-2SO",
						"POE-DAMARON",
						"REY",
						"JABBA THE HUTT",
						"ADMIRAL ACKBAR",
						"KYLO REN",
						"CHEWBACCA",
						"JYN ERSO",
						"GALEN ERSO",
						"BOBA FETT",
						"JANGO FETT",
						"FINN",
						"SAW GERRERA",
						"CASSIAN ANDOR",
						"GREEDO",
						"CHIRRUT IMWE",
						"QUI-GON JINN",
						"MAZ KANATA",
						"ORSON KRENNIC",
						"BAZE MALBUS",
						"DARTH MAUL",
						"MON MOTHMA",
						"EMPEROR PALPATINE",
						"CAPTAIN PHASMA",
						"UNKAR PLUTT",
						"ROGUE SQUADRON",
						"SEBULBA",
						"SHMI SKYWALKER",
						"SUPREME LEADER SNOKE",
						"GRAND MOFF TARKIN",
						"MACE WINDU",
						"THE FORCE",
						"THE DARK SIDE",
						"WOOKIES",
						"EWOKS",
						"STORMTROOPERS",
						"THE REBELS",
						"THE EMPIRE",
						"X-WING",
						"TIE FIGHTER",
						"MILLENNIUM FALCON",
						"ROUGE-ONE",
						"STAR DESTROYER",
						"DEATH STAR",
						"STARKILLER BASE"
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
				space++;
			} else if (phrase[i] === " ") {
				userGuess.innerHTML = " ";
				space++;
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
			for (var i = 0; i < phrase.length; i++) {
				if (phrase[i] === userPick) {
					userGuesses[i].innerHTML = userPick;
					counter++;
					updateStats();
				}
			}
			let j = (phrase.indexOf(userPick));
			if (j === -1 ) {
				numberOfGuesses--;
				updateStats();
			}
			for (var i = 0; i < userGuesses.length; i++) {
				if (counter + space === userGuesses.length) {
					level++;
					alertWin();
					updateStats();
				}
			}
			if (numberOfGuesses == 0) {
				lives--;
				alertLoss();
				updateStats();
			}
			if (level == 11) {
				alertJediMaster();
			}
			if (lives == 0) {
				alertGameOver();
			}
		}
	}


	// Function to start playing of a round
	let startRound = () => {

		phrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
		phrase = phrase.replace(/\s/g, "-");
		//console.log(phrase);
		alphaNumericButtons();
		userGuesses = [];
		numberOfGuesses = 7;
		counter = 0;
		space = 0;
		displayPhrase();
		updateStats();


	}

	let resetGame = () => {
		clearGameArea();
		startRound();
		lives = 3;
		level = 1;
		updateStats();
	}

	let updateStats = () => {
		let statsHtml = 
			"<ul>" +
			"<li>LEVEL " + level + "</li>" +
			"<li>LIVES " + lives + "</li>" + 
			"<li>GUESSES LEFT " + numberOfGuesses + "<li>" +
			"<ul>";

			document.querySelector("#stats-bar").innerHTML = statsHtml;
	}

	let clearGameArea = () => {
		document.getElementById('phrase').innerHTML = "";
		document.getElementById('alphanumeric-buttons').innerHTML = "";
	};

	let alertWin = () => {
		alert("LEVEL UP! THE PHRASE WAS: " + phrase + ". " + "THE FORCE IS STRONG WITH YOU");
		clearGameArea();
		startRound();
	}

	let alertLoss = () => {
		alert("YOU LOOSE! THE PHRASE WAS: " + phrase + ". " + "THE FORCE IS NOT STRONG WITH YOU");
		clearGameArea();
		startRound();
	}

	let alertJediMaster = () => {
		alert("YOU ARE A JEDI MASTER! THE FORCE IS STRONG WITH YOU. LET'S PLAY AGAIN!");
		resetGame();
	}

	let alertGameOver = () => {
		alert("GAME OVER, WOULD YOU LIKE TO PLAY AGAIN?");
		resetGame();
	}

	let playSWTheme = () => {
		document.getElementById("star_wars_theme").play();
	}


	startRound();
	playSWTheme();

};