// All the sound effects for the game and object to make them work


let isPlaying = false;

// Theme Music Buttons
let buttonSWTheme = document.getElementById("button_swTheme");
let buttonImperialMarch = document.getElementById("button_imperial_march");
let buttonCantina = document.getElementById("button_cantina");
let buttonThroneRoom = document.getElementById("button_throne_room");

// Sounds Object
let sounds = {

	// SoundFX

	fxBlaster1: function() {
		fxBlaster1 = document.getElementById("blaster_1");
		fxBlaster1.play();
	},

	fxR2d2beeps: function() {
		fxR2d2beeps = document.getElementById("r2d2_beeps_2");
		fxR2d2beeps.play();
	},

	fxYoda: function() {
		fxYoda = document.getElementById("yoda_do_or_do_not");
		fxYoda.play();
	},
	fxChewy: function() {
		fxChewy = document.getElementById("chewbacca");
		fxChewy.play();
	},
	fxDarthVader: function() {
		fxDarthVader = document.getElementById("darthvader_taughtyouwell");
		fxDarthVader.play();
	},
	fxJabba: function() {
		fxJabba = document.getElementById("jabba_laugh");
		fxJabba.play();
	},
	fxLuke: function() {
		fxLuke = document.getElementById("luke_learnthways");
		fxLuke.play();
	},
	fxHanBadFeeling: function() {
		fxHanBadFeeling = document.getElementById("hansolo_badfeeling");
		fxHanBadFeeling.play();
	},
	fxHanCaptain: function() {
		fxHanCaptain = document.getElementById("hansolo_captain");
		fxHanCaptain.play();
	},

	// Theme Music Choices
	playSWTheme: function() {
		if (isPlaying == false) {
			starWarsTheme = document.getElementById("star_wars_theme");
			starWarsTheme.volume = 0.5;
			starWarsTheme.play();
			isPlaying = true;
			buttonSWTheme.setAttribute('class', 'active');
			buttonImperialMarch.disabled = true;
			buttonCantina.disabled = true;
			buttonThroneRoom.disabled = true;
		} else {
			starWarsTheme.pause();
			starWarsTheme.currentTime = 0;
			buttonSWTheme.setAttribute('class', '');
			buttonImperialMarch.disabled = false;
			buttonCantina.disabled = false;
			buttonThroneRoom.disabled = false;
			isPlaying = false;
		}
	},

	playImperialMarch: function() {
		if (isPlaying == false) {
			imperialMarch = document.getElementById("imperial_march");
			imperialMarch.volume = 0.5;
			imperialMarch.play();
			isPlaying = true;
			buttonImperialMarch.setAttribute('class', 'active');
			buttonSWTheme.disabled = true;
			buttonCantina.disabled = true;
			buttonThroneRoom.disabled = true;
		} else {
			imperialMarch.pause();
			imperialMarch.currentTime = 0;
			isPlaying = false;
			buttonImperialMarch.setAttribute('class', '');
			buttonSWTheme.disabled = false;
			buttonCantina.disabled = false;
			buttonThroneRoom.disabled = false;
		}
	},

	playCantina: function() {
		if (isPlaying == false ) {
			cantina = document.getElementById("cantina");
			cantina.volume = 0.5;
			cantina.play();
			isPlaying = true;
			buttonCantina.setAttribute('class', 'active');
			buttonSWTheme.disabled = true;
			buttonImperialMarch.disabled = true;
			buttonThroneRoom.disabled = true;
		} else {
			cantina.pause();
			cantina.currentTime = 0;
			isPlaying = false;
			buttonCantina.setAttribute('class', '');
			buttonSWTheme.disabled = false;
			buttonImperialMarch.disabled = false;
			buttonThroneRoom.disabled = false;
		}

	},

	playThroneRoom: function() {
		if (isPlaying == false) {
			throneRoom = document.getElementById("throne_room");
			throneRoom.volume = 0.5;
			throneRoom.play();
			isPlaying = true;
			buttonThroneRoom.setAttribute('class', 'active');
			buttonSWTheme.disabled = true;
			buttonImperialMarch.disabled = true;
			buttonCantina.disabled = true;
		} else {
			throneRoom.pause();
			throneRoom.currentTime = 0;
			isPlaying = false;
			buttonThroneRoom.setAttribute('class', '');
			buttonSWTheme.disabled = false;
			buttonImperialMarch.disabled = false;
			buttonCantina.disabled = false;
		}
	}


};