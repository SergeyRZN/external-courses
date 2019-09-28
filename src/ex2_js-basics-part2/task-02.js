"use strict";
function arrayCount(myArray) {
    let countArray = 0;
    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
      countArray = countArray + 1;
    }
    console.log (countArray);
}
module.exports = arrayCount;
