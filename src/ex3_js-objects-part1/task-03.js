"use strict";
function checkPropertyObject(property, object) {
	if (typeof property === "string" && typeof object === "object") {
		return property in object;
	};
	return undefined;
}
module.exports = checkPropertyObject;
