exports.add = function(a,b) {
	return a + b;
};

exports.sub = function(a,b) {
	return a - b;
};

exports.mult = function(a,b) {
	return a * b;
};

exports.div = function(a,b) {
	if (0 === b) {
		return "Error! Division by zero.";
	}
	return a / b;
};