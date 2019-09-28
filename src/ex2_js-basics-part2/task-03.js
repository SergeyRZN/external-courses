"use strict";
function checkNumber(myArray) {
    let notEventNumber = 0, eventNumber = 0, zeroNumber = 0, arrayNumber;
    for (let i = 0; i < myArray.length; i++) {
        if(typeof(myArray[i]) !== "number") {
          continue;
        };
        if(myArray[i] === 0) {
          zeroNumber = zeroNumber + 1;
          continue;
        };
        switch (myArray[i] % 2) {
        case 0:
            eventNumber = eventNumber + 1;
            break;
        default:
        notEventNumber = notEventNumber +1;
        }
    }
    console.log (eventNumber);
    console.log (notEventNumber);
    console.log (zeroNumber);
    arrayNumber = [eventNumber,notEventNumber,zeroNumber];
    return arrayNumber;
}
module.exports = checkNumber;
