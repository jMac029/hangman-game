// All the sound effects for the game and object to make them work


// Sounds Object
let sounds = {


	playSWTheme: function() {
		starWarsTheme = document.getElementById("star_wars_theme");
		starWarsTheme.volume = 0.7;
		starWarsTheme.play();
	},

	playImperialMarch: function() {
		imperialMarch = document.getElementById("imperial_march");
		imperialMarch.volume = 0.7;
		imperialMarch.play();
	},

	playCantina: function() {
		cantina = document.getElementById("cantina");
		cantina.volume = 0.7;
		cantina.play();

	},

	playThroneRoom: function() {
		throneRoom = document.getElementById("throne_room");
		throneRoom.volume = 0.7;
		throneRoom.play();
	}

};

// Sound Buttons
let starWarsThemeButton = document.getElementById("button_sw_theme");