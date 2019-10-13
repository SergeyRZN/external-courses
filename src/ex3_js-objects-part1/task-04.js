"use strict";
function complementObject(property, object) {
	let copyObject = object
	if (typeof property === "string" && typeof copyObject === "object") {
		if (!(property in copyObject)) {
			copyObject[property] = "new";
		};
	}; 
	return copyObject;
} 
module.exports = complementObject;
