// tell the spec where to find our code
var math = require('../math');

describe("A simple arithmetic program", function() {
	
	it("can add two numbers", function() {
		expect(math.add(3,5)).toBe(8);
	});
    //For subtraction
    it("can subtract two numbers", function() {
    	expect(math.subtract(3,5)).toBe(-2);
    });
    //For Multiplication
	it("can multiply two numbers", function() {
		expect(math.multiply(3,5)).toBe(15);
	});
	//For Division
	it("can divide two numbers", function() {
		expect(math.divide(15,5)).toBe(3);
	});

