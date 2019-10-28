"use strict";
function analogMethodReduce(array, callback, initialValue) {
	let previousValue, i;
	if (initialValue) {
		i = 0;
		previousValue = initialValue;
	} else {
		previousValue = array[0];
		i = 1;
	};
	for (i; i<array.length; i++) {
		previousValue = callback(previousValue, array[i], i, array);
	};
	return previousValue;
};
module.exports = analogMethodReduce;