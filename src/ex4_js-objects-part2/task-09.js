"use strict";
function editString (offer, word, wordNumber) {
	let keyword = (offer.split(' ')[wordNumber]);
	return offer.replace(keyword, keyword + " " + word);
}
module.exports = editString;