// All of the Data to be used for the game

// Variables 
let numberOfGuesses ;
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
					{ phrase: "EMPEROR PALPATINE",
					  category: "VILLAIN",
					  hint: "AKA DARTH SIDIOUS"
					},
					{ phrase: "CAPTAIN PHASMA",
					  category: "VILLAIN",
					  hint: "CHROME ARMOR"
					},
					{ phrase: "UNKAR PLUTT",
					  category: "VILLAIN",
					  hint: "ONCE OWNED MILLENNIUM FALCON"
					},
					{ phrase: "ROGUE SQUADRON",
					  category: "GROUP",
					  hint: "LEAD BY WEDGE ANTILLES"
					},
					{ phrase: "SEBULBA",
					  category: "VILLAIN",
					  hint: "POD RACER"
					},
					{ phrase: "SHMI SKYWALKER",
					  category: "HERO",
					  hint: "MOTHER OF ANAKIN"
					},
					{ phrase: "SUPREME LEADER SNOKE",
					  category: "VILLAIN",
					  hint: "LEADER OF THE FIRST ORDER"
					},
					{ phrase: "GRAND MOFF TARKIN",
					  category: "VILLAIN",
					  hint: "PLAYED BY ACTOR PETER CUSHING"
					},
					{ phrase: "MACE WINDU",
					  category: "HERO",
					  hint: "PURPLE LIGHTSABER"
					},
					{ phrase: "THE FORCE",
					  category: "THING",
					  hint: "IT SURROUNDS US AND BINDS US TOGETHER"
					},
					{ phrase: "THE DARK SIDE",
					  category: "THING",
					  hint: "THE SITH FOLLOW..."
					},
					{ phrase: "WOOKIES",
					  category: "SPECIES",
					  hint: "YOU CAN'T TRUST THEM"
					},
					{ phrase: "EWOKS",
					  category: "SPECIES",
					  hint: "CUDDLY LITTLE BEARS"
					},  
					{ phrase: "STORMTROOPERS",
					  category: "GROUP",
					  hint: "WHITE ARMOR"
					},
					{ phrase: "THE REBELS",
					  category: "GROUP",
					  hint: "AIMED TO OVERTHROW THE EMPIRE"
					},
					{ phrase: "THE EMPIRE",
					  category: "GROUP",
					  hint: "RULERS OF THE GALAXY"
					},
					{ phrase: "X-WING",
					  category: "STARSHIP",
					  hint: "FIGHTER OF THE REBELLION"
					},
					{ phrase: "TIE FIGHTER",
					  category: "STARSHIP",
					  hint: "FIGHTER OF THE EMPIRE"
					},
					{ phrase: "MILLENNIUM FALCON",
					  category: "STARSHIP",
					  hint: "FASTEST HUNK OF JUNK IN THE GALAXY"
					},
					{ phrase: "ROUGE-ONE",
					  category: "STARSHIP",
					  hint: "CAPTURE IMPERIAL CARGO SHIP"
					},
					{ phrase: "STAR DESTROYER",
					  category: "STARSHIP",
					  hint: "IMPERIAL"
					},
					{ phrase: "DEATH STAR",
					  category: "STARSHIP",
					  hint: "THAT'S NO MOON"
					},
					{ phrase: "STARKILLER BASE",
					  category: "PLANET",
					  hint: "BIG RED EYE"
					}
];