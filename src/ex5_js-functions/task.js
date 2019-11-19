"use strict";
let calculator = {
	result: 0,
	add(value = 0){ 
		if(typeof value === "number") {
			calculator.result += value;
		};
		return add;
	},
    subtract(value = 0) {
		if(typeof value === "number") {
			calculator.result -= value;
		};
		return subtract;
    },
    divide(value = 1) {
		if(typeof value === "number") {
			calculator.result /= value;
		};
		return divide;
    },
    multiply(value = 1) {
		if(typeof value === "number") {
			calculator.result *= value;
		};
		return multiply;
    },   
    getResult() {
        return calculator.result;
    },
    reset() {
        calculator.result = 0;
        return calculator.result;
    } 
};
return calculator.result;
module.exports = calculator; 