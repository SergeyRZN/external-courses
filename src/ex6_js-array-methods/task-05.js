"use strict";
function analogMethodMap(array, callback) {
	let newArray = [];
	for (let i=0; i<array.length; i++) {
        newArray.push(callback(array[i], i, array));
    };
    return newArray;
};
module.exports = analogMethodEvery;