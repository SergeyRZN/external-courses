"use strict";
function copyObject(object) {
	let newObject = {};
	if(typeof object === "object") {	
		/* Методом перебора не получилось сделать. Проверка линтера выдавала след. ошибку: The body of a for-in should be wrapped in an 
		if statement to filter unwanted properties from the prototype  guard-for-in
		for (let key in object) {
			if (object.hasOwnProperty(key)) {
				newObject[key] = object[key];
			};
		};
		*/
		Object.assign(newObject, [object]);	
	};
	return newObject;
}
module.exports = copyObject;
