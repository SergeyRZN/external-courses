"use strict";
function checkType(valueParametr) {
    if ((typeof valueParametr === "number" && !isNaN(valueParametr)) || typeof valueParametr === "string") {
	    return typeof valueParametr;
	} 
	return undefined;
}
module.exports = checkType;
