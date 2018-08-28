// This code decrypts anagrams. Or whatever it's called when something is a word with letters mixed up
// I still need a really good dictionary and a way to select the word I actually want to use of the options available, so I can copy and paste the next paragraph

var english = "apple apples banana bananas bansnaa orange oranges range ranges are disgusting gross but lovely like i delicious tasty";
//var curseWords = {"ass": -1, "asshole": -1, "bitch": -1, "bitching": -1, "bastard": -1, "cock": -1, "crap": -1, "cunt": -1, "damn": -1, "darn": -1, "dick": -1, "douche": -1, "fag": -1, "faggot": -1, "fuck": -1, "fucker": -1, "fucking": -1, "motherfucker": -1, "goddamn": -1, "hell": -1, "nigger": -1, "nigga": -1, "piss": -1, "pussy": -1, "shit": -1, "slut": -1, "twat": -1, "whore": -1}


//Creates an array to store all the words from the text boxes
var words;

function submitText() {
	//Grabs the value from the text box
	var txtInput = document.getElementById("txtBox").value;
	//Splits up the text by anything that's not a character
	words = txtInput.split(/\W/);
	decrypt();
}


//https://stackoverflow.com/questions/5924268/regular-expression-javascript-take-a-scrambled-word-and-find-an-unscrambled
//--------------------------------------------------------
var list = english.split(/\W/gim);
//console.log(list);
var sortedList = [];
list.forEach(function(element, index, array) {
	sortedList[index] = element.toLowerCase().split("").sort().join("");
	});
//console.log(sortedList);


//Micah's working function
/* function unscramble(word) {
	word = word.toLowerCase().split("").sort().join("");
	//console.log(word); //Zack, why is this running twice?
	var matches = [];
	for (var i = 0; i < list.length; i++) {
//OR	if (word.indexOf(sortedList[i]) >= 0) {
		if (word == sortedList[i]) {  //Zack, figure out what indexOf actually does and why not just do an exact match
			if (!matches[list[i]]) {
				matches[list[i]] = [];
			}
			//console.log(list[i]);
			matches[list[i]].push(list[i]); // Micah needs list[i] to be a string

		} else { // ONLY ELSE IF IT DOESN'T FIND IT IN THE WHOLE THING
		//	document.getElementById("wordOne").innerHTML += "Word not found: <br>";
		}
	//console.log(matches);
    }
	return matches;
	//console.log(matches);
} */

//Zack's working function
function unscramble(word) {
	var sortedWord = word.toLowerCase().split("").sort().join("");
	var matches = [];
	for (var i = 0; i < list.length; i++) {
//OR		if (sortedWord.indexOf(sortedList[i]) >= 0) { //Zack, figure out what indexOf actually does and why not just do an exact match
		if (sortedWord == sortedList[i]) {
			matches.push(list[i]);
		}
    }
	
	// creates a new paragraph of the new decrypted words
	if(matches.length == 0) { // if it couldn't find the word in the dictionary
		matches.push(word);
		document.getElementById("paragraph").innerHTML += "<span class='errorWord'>"+matches+"</span>"+" "; //make it red or something
	} else if(matches.length >= 2) { // if it found more than one word in the dictionary
		//document.getElementById("paragraph").innerHTML += "("; //open parenthesis
		for (i = 0; i < matches.length; i++) {
			document.getElementById("paragraph").innerHTML += "<button>"+matches[i]+"</button>"; //make it red or something
		}
		//document.getElementById("paragraph").innerHTML += ") "; //close parenthesis
		document.getElementById("paragraph").innerHTML += " "; //close parenthesis
	} else { // if it found just one word in the dictionary
		document.getElementById("paragraph").innerHTML += matches+" ";
	}
	return matches;
}


function decrypt(){
	for (var i = 0; i < words.length; i++) {
		var oneWord = words[i].toLowerCase();
		var wordArray = unscramble(oneWord);
		document.getElementById("wordOne").innerHTML += "Original: "+oneWord+"<br>";
		document.getElementById("wordOne").innerHTML += "Fixed: "+wordArray+"<br><br>";
	}
}
//--------------------------------------------------------
//ppales aer ytsta but aaannbs are doog too and an rangeo



function leftPress(){
	//Detects if a key is clicked (specifically, the left arrow)
	document.addEventListener("keyup", function(event) {
	event.preventDefault();
		if (event.keyCode == 37) {
		//Do something on left press
		};
	});
}

//Starts the function to listen for a left arrow key press
leftPress();

