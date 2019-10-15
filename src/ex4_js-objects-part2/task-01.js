"use strict";
function searchValuePrototype(property, object) {
    const obj = Object.create(object);
	if (! object.hasOwnProperty([property])) {
		return obj[property];
	};
	return undefined;
}
module.exports = searchValuePrototype;
