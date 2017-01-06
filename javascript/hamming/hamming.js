var Hamming = function() {};

Hamming.prototype.compute = function(dnaA, dnaB) {
	if (dnaA.length !== dnaB.length) {
		throw new Error('DNA strands must be of equal length.')
	}
	var counter = 0;
	arrayDnaA = [... dnaA];
	arrayDnaB = [... dnaB];
	for (var i=0; i<dnaA.length; i++) {
		if (dnaA[i] !== dnaB[i]) counter++;
	}

	return counter;
};

module.exports = Hamming;