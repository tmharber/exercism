var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaSequence) {
	var nucleotideMap = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
	var rnaSequence = '';
	for (var i=0; i<dnaSequence.length; i++) {
		rnaSequence += nucleotideMap[dnaSequence[i]]
	}
	return rnaSequence;
};

module.exports = DnaTranscriber;