"use strict";
function deepCloneObject(object) {
		let newObject =	Array.isArray(object)?[]:{};
		if(typeof object === "object") {	
			for (let key in object) {
				if (object.hasOwnProperty(key)) {
					if(typeof object[key] === "object") {
						newObject[key] = deepCloneObject(object[key]);
					} else {
						newObject[key] = object[key]
					};
				};
			};
		};
	return newObject;
};
module.exports = deepCloneObject;
