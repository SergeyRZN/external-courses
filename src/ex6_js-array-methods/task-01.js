"use strict";
function analogMethodSlice(array, begin, end) {
	let newArray = [], element1, element2;
	if (begin<0) {
		element1 = array.length - (-begin);
	} else {
		element1 = begin;
	};
	if (end<0) {
		element2 = array.length - (-end);
	} else {
		element2 = end;
	};
	if (begin === undefined && end === undefined) {
		array.forEach(function (item, index, array) {
		newArray.push(item);
	});
	} else if (end === undefined) {
        for (let i=0; i<array.length; i++) {
			if (i>=element1) {
				newArray.push(array[i]);
			};
		};
	} else {
		for (let i=element1; i<element2; i++) {
			newArray.push(array[i]);
		};
    };
	return newArray;
};
module.exports = analogMethodSlice;