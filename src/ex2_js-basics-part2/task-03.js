"use strict";
function checkNumber(myArray) {
    let notEventNumber = 0, eventNumber = 0, zeroNumber = 0, arrayNumber;
    for (let i = 0; i < myArray.length; i++) {
        if(typeof myArray[i] !== "number") {
          continue;
        };
        if(myArray[i] === 0) {
          zeroNumber += 1;
          continue;
        };
		if (myArray[i] % 2 === 0) {
			eventNumber += 1;
		} else {
			notEventNumber += 1;
			};
        };
    
    arrayNumber = [eventNumber,notEventNumber,zeroNumber];
    return arrayNumber;
}
module.exports = checkNumber;
