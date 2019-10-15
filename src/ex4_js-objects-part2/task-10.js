"use strict";
function upendString (offer) {
	let reverseString = "";
	// return offer.split("").reverse().join("");
	for (let a = offer.length-1; a >= 0; a--) {
		reverseString += offer[a];
	};
	return reverseString;
}
module.exports = notationLowerCamelCase;