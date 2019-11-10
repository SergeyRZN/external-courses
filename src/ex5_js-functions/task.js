"use strict";
let calculator = {
	result: 0,
	add(value = 0){ 
		if(typeof value === "number") {
			calculator.result += value;
		};
		return calculator.add;
	},
    subtract(value = 0) {
		if(typeof value === "number") {
			calculator.result -= value;
		};
		return calculator.subtract;
    },
    divide(value = 1) {
		if(typeof value === "number") {
			calculator.result /= value;
		};
		return calculator.divide;
    },
    multiply(value = 1) {
		if(typeof value === "number") {
			calculator.result *= value;
		};
		return calculator.multiply;
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