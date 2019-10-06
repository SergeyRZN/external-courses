"use strict";
function createObject() {
    const resume = {};
	resume.myName = "Vedutenko";
	resume.age = 22;
	resume.man = true;
	delete resume.age;
}
module.exports = createObject;
