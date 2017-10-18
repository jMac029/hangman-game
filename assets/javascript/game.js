// Hangman Game - Star Wars Style

// Load the Game Elements when the page loads
window.onload = () => {

	// Global Variables
	let wins ; 
	let numberOfGuesses = 10;
	let phrase ;
	let space ;
	let lives ;
	let counter ;
	let levels = 10;

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
						"MILLENIUM-FALCON"
					];

	// Function to select a word at random from the phraseArray
	// let selectPhrase () => {
	// 	return phrase[Math.floor(Math.random() * phraseArray.length)];
	// }

	// Function to Create AlphaNumeric 

	let alphaNumericButtons = () => {
		buttons = document.getElementById('alphanumeric-buttons');
		characters = document.createElement('ul');

		for (var i = 0; i < alphaNumeric.length; i++) {
			characters.id = 'alphaNumeric';
			list = document.createElement('li');
			list.id = 'character';
			list.innerHTML = alphaNumeric[i];
			// check();
			buttons.appendChild(characters);
			characters.appendChild(list);
		}
	}

	// Function to create blank underscores for the letters in the Phrase array

	// let blankAnswers ( answerPhrase ) => {
	// 	let blanks = "";
	// 	for (i in answerPhrase ) {
	// 		blanks = "_" + blanks;
	// 	}
	// 	return blanks;
	// }

	alphaNumericButtons();

};