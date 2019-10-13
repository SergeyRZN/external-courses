"use strict";
function notationLowerCamelCase (offer) {	
	let offerUpperCase = "";

	for (let i = 0; i < offer.length; i++) {
		offerUpperCase += (offer[i - 1] === ' ') ? offer[i].toUpperCase() : offer[i].toLowerCase();
	};		
	
	return offerUpperCase.replace(/ /g,"");	 
}
module.exports = notationLowerCamelCase;
