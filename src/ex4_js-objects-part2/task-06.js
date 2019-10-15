"use strict";

function upperCaseFirstSymbolEachWord(offer) {
	let offerUpperCase = "";

	for (let i = 0; i < offer.length; i++) {
		offerUpperCase += (offer[i - 1] === ' ') ? offer[i].toUpperCase() : offer[i];
	};
	return offerUpperCase;
}
module.exports = upperCaseFirstSymbolEachWord;
