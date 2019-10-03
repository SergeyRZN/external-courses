"use strict";
function checkType(valueParametr) {
    if (typeof valueParametr === "number" || typeof valueParametr === "string") {
	    return typeof valueParametr;
	} 
	return undefined;
}
module.exports = checkType;
