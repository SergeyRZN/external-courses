"use strict";
function checkType(valueParametr) {
    switch (typeof(valueParametr)) {
    case "number":
        return "number";
    case "string":
        return "string";
    default:
        return undefined;
    }
}
module.exports = checkType;
