"use strict";
let calculator = {
	result: 0,
	add(value = 0){ 
		if(typeof value === "number") {
			calculator.result += value;
			return calculator.add;
		};
		return add;
	},
    subtract(value = 0) {
		if(typeof value === "number") {
			calculator.result -= value;
			return calculator.subtract;
		};
		return subtract;
    },
    divide(value = 1) {
		if(typeof value === "number") {
			calculator.result /= value;
			return calculator.divide;
		};
		return divide;
    },
    multiply(value = 1) {
		if(typeof value === "number") {
			calculator.result *= value;
			return calculator.multiply;
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
module.exports = calculator; 