"use strict";
function chekSimpleNumber(valueParametr) {
    let resultat;
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
      switch (valueParametr % i) {
      case 0:
	    resultat = "Число "+valueParametr+" - составное число";
        break outerWhile;
      default: 
        resultat = "Число "+valueParametr+" - простое число";
        continue;
      };
    };
    return resultat;
}
module.exports = chekSimpleNumber;
