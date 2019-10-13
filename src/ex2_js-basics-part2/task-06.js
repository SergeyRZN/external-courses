"use strict";
function chekSimpleNumber(valueParametr) {
    let result;
    if (typeof(valueParametr) !== "number") {
        return "Передоваемый параметр не числового типа";
    }
    if (valueParametr > 1000) {
      return "Данные неверны";
    }
    if (valueParametr <= 1) {
      return "Число "+valueParametr+" - составное число";
    }
	outerWhile:
    for (let i = 2; i < valueParametr; i++) {
		if (valueParametr % i === 0) {
			result = "Число "+valueParametr+" - составное число";
			break outerWhile;
		} else {
			result = "Число "+valueParametr+" - простое число";
			continue;
		};
    };
    return result;
}
module.exports = chekSimpleNumber;
