// JS Objects Recap!


// Instantiating an object

var lightSaber = {
	color: "green",
	owner: "Luke",
	age: 1
};

// Instantiating an object with the Object constructor

var milleniumFalcon = new Object();

milleniumFalcon.pilot = "Han Solo";
milleniumFalcon.copilot = "Chewie";

// Our Jedi constructor -- makes a new Jedi with name, level, and lightsaber properties set to values that match the arguments given (or undefined if not enough arguments are given)

function Jedi(name, level, lightSaber){
	this.name = name;
	this.level = level;
	this.lightSaber = lightSaber;
}

// Getting the keys of an object

var falconKeys = Object.keys(milleniumFalcon); // this will end up containing an array that includes ["pilot", "copilot"]


// Looping through an object's properties with a for...in loop


for (i in lightSaber) {
	// prints to the console the name of the property (i) and the value of the property (lightsaber[i]), with a colon and a space in between
	console.log(i + ": " + lightSaber[i]);
}

// the following is code used to show animation of lightSaber blades turning off and on (but there is a missing link... can you figure out what is missing and fix it using javascript in the console?)


// students: DO NOT EDIT, CHANGE OR DELETE THE FOLLOWING CODE

// setting our default lightsaber blade width
var currentWidth = 650;

// accessing audio files on the dom
var saberOn = document.getElementById("saber-on"); 
var saberOff = document.getElementById("saber-off");

// this is our function that will change the visual aspects of our objects on the dom
function activateSaber(command) {
	if(command == "powerUp"){

		// setting an interval of 15 milliseconds, our following function will be called every 15 milliseconds until I tell the interval to stop
		var on = setInterval(powerUp, 15);
		// .play(); is a javascript default function that plays audio files when called
		saberOn.play();

		function powerUp() { 
			// adding 10px to our current width
		  currentWidth += 10;

		  if(currentWidth < 650){	
			  for (i =0; i < saberBlades.length - 1; i++) {
			  	// using dom manipulation to set our blades' widths to currentWidth value
			    saberBlades[i].style.width = currentWidth + "px";
			  }
		  } else {
		  	  // telling the interval to stop
			  clearInterval(on);
		  }
		};
	} else if(command == "powerDown"){
		
		var off = setInterval(powerDown, 10);
		saberOff.play();

		function powerDown() { 
		  currentWidth -= 10;

		  if(currentWidth >= 0){	
			  for (i = 0; i < saberBlades.length - 1; i++) {
			    saberBlades[i].style.width = currentWidth + "px";
			  }
		  } else {
			  clearInterval(off);
		  }
		};
	}
};
