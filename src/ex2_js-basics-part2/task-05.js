"use strict";
function arrayMaxValue(myArray) {
    let maxValue = 0;
    for (let i = 0; i < myArray.length; i++) {
      if(myArray[i] > maxValue) {
        maxValue = myArray[i];
      };
    };
    return maxValue;
}
module.exports = arrayMaxValue;
