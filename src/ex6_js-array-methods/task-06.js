"use strict";
function analogMethodReduce(array, callback, initialValue) {
	let previousValue;
	if (!initialValue) {
		previousValue = array[0];
		for (let i=1; i<array.length; i++) {
		previousValue = callback(previousValue, array[i], i, array);
		};
	} else {
		previousValue = initialValue;
		for (let i=0; i<array.length; i++) {
		previousValue = callback(previousValue, array[i], i, array);
		};
	};
	
  return previousValue;
};
module.exports = analogMethodReduce;