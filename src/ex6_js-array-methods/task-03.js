"use strict";
function analogMethodEvery(array, callback) {
	for (let i = 0; i < array.length; i++) {
		if (!(callback(array[i], i, array))) {
			return false;
		};
	};
	return true;
};
module.exports = analogMethodEvery;