// Hangman Game - Star Wars Style

// Load the Game Elements when the page loads
window.onload = () => {

	// Variables 
	let numberOfGuesses = 7 ;
	let phrase ;
	let category ;
	let hint ;
	let character ;
	let userGuess ;
	let userGuesses = [];
	let chosenPhrase = [];
	let usedPhrases = [];
	let space ;
	let lives = 3;
	let counter ;
	let points = 0;
	let bonus = false;
	let round = 1;

	// Constants

	const alphaNumeric = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
						"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
						"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	// array of Star Wars Phrases to choose from
	let phraseArray = [
						{ phrase: "ALDERAAN",
						  category: "PLANET",
						  hint: "THE FIRST PLANET THE DEATH STAR DESTROYED"
						},
						{ phrase: "BESPIN",
						  category: "PLANET",
						  hint: "HOME OF CLOUD CITY"
						},
						{ phrase: "CORUSCANT",
						  category: "PLANET",
						  hint: "THE WHOLE PLANET IS A CITY"
						},
						{ phrase: "ENDOR",
						  category: "PLANET",
						  hint: "HOME OF THE EWOKS"
						},
						{ phrase: "HOTH",
						  category: "PLANET",
						  hint: "ICE AND SNOW"
						},
						{ phrase: "JAKKU",
						  category: "PLANET",
						  hint: "FINAL BATTLE OF GALACTIC CIVIL WAR"
						},
						{ phrase: "JEDHA",
						  category: "PLANET",
						  hint: "ANCIENT HOME OF THE JEDI"
						},
						{ phrase: "KASHYYYK",
						  category: "PLANET",
						  hint: "HOME OF THE WOOKIES"
						},
						{ phrase: "SCARIF",
						  category: "PLANET",
						  hint: "IMPERIAL DATA ARCHIVES"
						},
						{ phrase: "TATOOINE",
						  category: "PLANET",
						  hint: "HOME OF THE SKYWALKERS"
						},
						{ phrase: "YAVIN-4",
						  category: "PLANET",
						  hint: "SECRET REBEL BASE"
						},
						{ phrase: "NABOO",
						  category: "PLANET",
						  hint: "HOME OF THE GUNGAN"
						},
						{ phrase: "DAGOBAH",
						  category: "PLANET",
						  hint: "SWAMPS"
						},
						{ phrase: "JEDI",
						  category: "GROUP",
						  hint: "PEACEKEEPERS OF THE GALAXY"
						},
						{ phrase: "SITH",
						  category: "GROUP",
						  hint: "USUALLY ONLY TWO OF THEM"
						},
						{ phrase: "YODA",
						  category: "HERO",
						  hint: "OVER 900 YEARS OLD"
						},
						{ phrase: "LUKE SKYWALKER",
						  category: "HERO",
						  hint: "FARMBOY"
						},
						{ phrase: "ANAKIN SKYWALKER",
						  category: "HERO",
						  hint: "HAD NO FATHER"
						},
						{ phrase: "DARTH VADER",
						  category: "VILLAIN",
						  hint: "FORCE CHOKER"
						},
						{ phrase: "HAN SOLO",
						  category: "HERO",
						  hint: "SMUGGLER"
						},
						{ phrase: "LANDO CALRISSIAN",
						  category: "HERO",
						  hint: "CHARMER"
						},
						{ phrase: "PRINCESS LEIA",
						  category: "HERO",
						  hint: "BUNS"
						},
						{ phrase: "PADME AMIDALA",
						  category: "HERO",
						  hint: "QUEEN AND SENATOR"
						},
						{ phrase: "WEDGE ANTILLES",
						  category: "HERO",
						  hint: "LEADER OF ROUGE SQUADRON"
						},
						{ phrase: "OBI-WAN KENOBI",
						  category: "HERO",
						  hint: "AKA BEN"
						},
						{ phrase: "JAR-JAR BINKS",
						  category: "COMIC RELIEF",
						  hint: "LONG TOUNGUE"
						},
						{ phrase: "R2-D2",
						  category: "DROID",
						  hint: "BEEP"
						},
						{ phrase: "C-3PO",
						  category: "DROID",
						  hint: "ETIQUETTE AND PROTOCOL"
						},
						{ phrase: "BB-8",
						  category: "DROID",
						  hint: "ROLLER BALL"
						},
						{ phrase: "K-2SO",
						  category: "DROID",
						  hint: "SNARKY IMPERIAL DROID"
						},
						{ phrase: "POE-DAMARON",
						  category: "HERO",
						  hint: "GREATEST PILOT IN THE RESISTENCE"
						},
						{ phrase: "REY",
						  category: "HERO",
						  hint: "ORPHANED ON A PLANET"
						},
						{ phrase: "JABBA THE HUTT",
						  category: "VILLAIN",
						  hint: "GIANT WORM"
						},
						{ phrase: "ADMIRAL ACKBAR",
						  category: "HERO",
						  hint: "IT'S A TRAP!"
						},
						{ phrase: "KYLO REN",
						  category: "VILLAIN",
						  hint: "EMO KID"
						},
						{ phrase: "CHEWBACCA",
						  category: "HERO",
						  hint: "FUZZBALL"
						}, 
						{ phrase: "JYN ERSO",
						  category: "HERO",
						  hint: "I AIM TO REBEL"
						},
						{ phrase: "GALEN ERSO",
						  category: "HERO",
						  hint: "DESIGNER OF DEATH STAR"
						},
						{ phrase: "BOBA FETT",
						  category: "VILLAIN",
						  hint: "FAMOUS BOUNTY HUNTER"
						},
						{ phrase: "JANGO FETT",
						  category: "VILLAIN",
						  hint: "CLONE OF CLONE ARMY"
						},
						{ phrase: "FINN",
						  category: "HERO",
						  hint: "WAS ONCE A STORMTROOPER"
						},
						{ phrase: "SAW GERRERA",
						  category: "HERO",
						  hint: "PLAYED BY ACTOR FOREST WHITAKER"
						},
						{ phrase: "CASSIAN ANDOR",
						  category: "HERO",
						  hint: "REBEL SPY"
						},
						{ phrase: "GREEDO",
						  category: "VILLAIN",
						  hint: "HE DID NOT SHOOT FIRST"
						},
						{ phrase: "CHIRRUT IMWE",
						  category: "HERO",
						  hint: "I AM ONE WITH THE FORCE AND THE FORCE IS WITH ME"
						},
						{ phrase: "QUI-GON JINN",
						  category: "HERO",
						  hint: "TOOK ANAKIN AS PADAWAN"
						},
						{ phrase: "MAZ KANATA",
						  category: "HERO",
						  hint: "BIG EYES"
						},
						{ phrase: "ORSON KRENNIC",
						  category: "VILLAIN",
						  hint: "DIRECTOR OF DEATH STAR"
						},
						{ phrase: "BAZE MALBUS",
						  category: "HERO",
						  hint: "PROTECTOR OF CHIRRUT"
						},
						{ phrase: "DARTH MAUL",
						  category: "VILLAIN",
						  hint: "EPIC FACE WITH HORNS"
						},
						{ phrase: "MON MOTHMA",
						  category: "HERO",
						  hint: "LEADER OF THE ALLIANCE"
						},
						// "EMPEROR PALPATINE",
						// "CAPTAIN PHASMA",
						// "UNKAR PLUTT",
						// "ROGUE SQUADRON",
						// "SEBULBA",
						// "SHMI SKYWALKER",
						// "SUPREME LEADER SNOKE",
						// "GRAND MOFF TARKIN",
						// "MACE WINDU",
						// "THE FORCE",
						// "THE DARK SIDE",
						// "WOOKIES",
						// "EWOKS",
						// "STORMTROOPERS",
						// "THE REBELS",
						// "THE EMPIRE",
						// "X-WING",
						// "TIE FIGHTER",
						// "MILLENNIUM FALCON",
						// "ROUGE-ONE",
						// "STAR DESTROYER",
						// "DEATH STAR",
						// "STARKILLER BASE"
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
		phraseDisplay = document.getElementById('phrase');
		correct = document.createElement('ul');

		for (var i = 0; i < phrase.length; i++) {
			correct.setAttribute('id', 'the-phrase');
			userGuess = document.createElement('li');
			userGuess.setAttribute('class', 'user-guess');
			// how to do will spaces and dashes in phrases
			if (phrase[i] === "-") {
				userGuess.innerHTML = " ";
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
	}

	// 

	let displayCategory = () => {
		let categoryHtml = "<h1>" + category + "</h1>";
		document.querySelector("#category").innerHTML = categoryHtml;
	}

	// let displayHint = () => {
	// 	let hintHtml = "<h1>HINT</h1>";
	// 	document.querySelector("#hint").innerHTML = hintHtml;
	// }

	// Function for when user clicks on a character and checks against the correct phrase
	let checkCharacter = function() {
		character.onclick = function() {
			let userPick = (this.innerHTML);
			this.setAttribute('class', 'active');
			this.onclick = null;
			for (var i = 0; i < phrase.length; i++) {
				if (phrase[i] === userPick) {
					userGuesses[i].innerHTML = userPick;
					points++;
					counter++;
					updateStats();
				}
			}
			// incorrect guesses
			let j = (phrase.indexOf(userPick));
			if (j === -1 ) {
				numberOfGuesses--;
				points--;
				updateStats();

			}
			// solved phrase
			for (var i = 0; i < userGuesses.length; i++) {
				if (counter + space === userGuesses.length) {
					points += 10;
					round++;
					alertWin();
					updateStats();
				}
			}
			// unsolved phrases after user uses all guesses available
			if (numberOfGuesses == 0) {
				points -= 10;
				lives--;
				alertLoss();
				updateStats();
			}
			// points bonus for completing 5 rounds
			if (round == 6 && bonus == false) {
				points += 25;
				alertBonus25();
			}
			// setting the bonus to false so bonus points do not keep being given
			if (round == 7) {
				bonus = false;
			}
			// points and extra life bonus after completing 10 rounds of the game
			if (round == 11 && bonus == false) {
				points += 50;
				lives++;
				alertBonus50();
			}
			if (round == 12) {
				bonus = false;
			}
			if (round == 16 && bonus == false) {
				points += 100;
				alertBonus100();
			}
			if (round == 17) {
				bonus = false;
			}
			if (round == 21 && bonus == false) {
				points += 150;
				lives++;
				alertBonus150();
			}
			if (round == 26) {
				points += 200;
				alertJediMaster();
			}
			// Game over if user runs out of lives
			if (lives == 0) {
				alertGameOver();
			}
		}
	}


	// Function to start playing of a round
	let startRound = () => {

		chosenPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
		//phrase = phrase.replace(/\s/g, "-");
		phrase = chosenPhrase.phrase;
		category = chosenPhrase.category;
		hint = chosenPhrase.hint;
		//console.log(chosenPhrase.phrase);
		//console.log(chosenPhrase.category);
		console.log(chosenPhrase.hint)
		alphaNumericButtons();
		userGuesses = [];
		numberOfGuesses = 7;
		counter = 0;
		space = 0;
		bonus = false;
		displayCategory();
		displayPhrase();
		// displayHint();
		updateStats();

		
	}

	// Reset Game to orginal settings
	let resetGame = () => {
		clearGameArea();
		startRound();
		points = 0;
		lives = 3;
		round = 1;
		updateStats();
	}

	let updateStats = () => {
		let statsHtml = 
			"<ul>" +
			"<li>ROUND " + round + "</li>" +
			"<li>LIVES " + lives + "</li>" + 
			"<li>POINTS " + points + "</li>" +
			"<li>GUESSES LEFT " + numberOfGuesses + "</li>" +
			"<ul>";

			document.querySelector("#stats-bar").innerHTML = statsHtml;
	}

	let clearGameArea = () => {
		document.getElementById('phrase').innerHTML = "";
		document.getElementById('alphanumeric-buttons').innerHTML = "";
	};

	let alertWin = () => {
		alert("ONTO THE NEXT ROUND! THE PHRASE WAS: " + phrase + ". " + "YOU HAVE " + points + " POINTS. " + "THE FORCE IS STRONG WITH YOU.");
		clearGameArea();
		usedPhrases.push(chosenPhrase);
		phraseArray.splice(phraseArray.indexOf(chosenPhrase) , 1);
		console.log(usedPhrases);
		startRound();
	}

	let alertBonus25 = () => {
		alert("YOU'VE REACHED ROUND 6 AND EARNED A 25 POINT BONUS! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		updateStats();
	}

	let alertBonus50 = () => {
		alert("YOU'VE REACHED ROUND 11 AND EARNED A 50 POINT BONUS AND A EXTRA LIFE! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		updateStats();
	}

	let alertBonus100 = () => {
		alert("YOU'VE REACHED ROUND 16 AND EARNED A 100 POINT BONUS! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		updateStats();
	}

	let alertBonus150 = () => {
		alert("YOU'VE REACHED ROUND 21 AND EARNED A 150 POINT BONUS AND AN EXTRA LIFE! YOU NOW HAVE " + points + " POINTS." );
		bonus = true;
		updateStats();
	}

	let alertLoss = () => {
		alert("YOU LOOSE! THE PHRASE WAS: " + phrase + ". " + "YOU HAVE " + points + " POINTS. " + "REMEMBER, DO OR DO NOT, THERE IS NO TRY.");
		clearGameArea();
		usedPhrases.push(chosenPhrase);
		phraseArray.splice(phraseArray.indexOf(chosenPhrase) , 1);
		console.log(usedPhrases);
		startRound();
	}

	let alertJediMaster = () => {
		alert("YOU ARE A JEDI MASTER! WITH " + points + " POINTS. " + "THE FORCE IS STRONG WITH YOU. LET'S PLAY AGAIN!");
		phraseArray.push.apply(usedPhrases);
		usedPhrases = []
		resetGame();
	}

	let alertGameOver = () => {
		alert("THE FORCE IS NOT STRONG WITH YOU...GAME OVER, WOULD YOU LIKE TO PLAY AGAIN?");
		phraseArray.push.apply(usedPhrases);
		usedPhrases = []
		resetGame();
	}

	let playSWTheme = () => {
		document.getElementById("star_wars_theme").play();
	}


	startRound();
	//playSWTheme();

};