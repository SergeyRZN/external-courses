"use strict";
function checkPropertyObject(property, object) {
	let propertyExists;
	if (typeof property === "string" && typeof object === "object") {
		propertyExists = property in object;
	}; 
	return propertyExists;
}
module.exports = checkPropertyObject;
