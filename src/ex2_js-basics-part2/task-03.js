"use strict";
function checkNumber(myArray) {
    let odd = 0, event = 0, zero = 0, arrayNumber;
    for (let i = 0; i < myArray.length; i++) {
        if(typeof myArray[i] !== "number") {
          continue;
        };
        if(myArray[i] === 0) {
          zero += 1;
          continue;
        };
		if (myArray[i] % 2 === 0) {
			event += 1;
		} else {
			odd += 1;
			};
        };
    
    arrayNumber = [event,odd,zero];
    return arrayNumber;
}
module.exports = checkNumber;
