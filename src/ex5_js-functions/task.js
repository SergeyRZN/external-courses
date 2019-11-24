"use strict";
let calculator = {
	result: 0,
	add(value = 0){ 
		if(Number(value)) {
			this.result += value;
		};
		return add;
	},
    subtract(value = 0) {
		if(Number(value)) {
			this.result -= value;
		};
		return subtract;
    },
    divide(value = 1) {
		if(Number(value)) {
			this.result /= value;
		};
		return divide;
    },
    multiply(value = 1) {
		if(Number(value)) {
			this.result *= value;
		};
		return multiply;
    },   
    getResult() {
        return this.result;
    },
    reset() {
        this.result = 0;
        return this.result;
    } 
};
return calculator.result;
module.exports = calculator; 