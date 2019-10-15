"use strict";
function countCharacters (string) {
	let arrayString, objectString = {};
	arrayString = string.split("");
	for (let i=0; i<arrayString.length; i++) {
		if (arrayString[i] in objectString) {
			continue;
		};
		let characters = 0;
		for (let j=0; j<arrayString.length; j++) {		
			if (arrayString[i]===arrayString[j]) {
				characters = ++characters;
			};
		};
		objectString[arrayString[i]] = characters;
		console.log(arrayString[i] +" "+ objectString[arrayString[i]]);
	};
};
module.exports = countCharacters;