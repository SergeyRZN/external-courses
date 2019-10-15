"use strict";
function matchStringToNumber(string, number) {
  return (string.length > number) ? string.slice(0, number - 1) + '…' : string;
}
module.exports = matchStringToNumber;
