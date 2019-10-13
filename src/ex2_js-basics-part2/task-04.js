"use strict";
function uniquenessArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] !== myArray[myArray.length-1]) {
        return false;
      }
    }
    return true;
}
module.exports = uniquenessArray;
