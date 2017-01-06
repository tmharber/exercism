var Words = function() {}

Words.prototype.count = function(input) {
	var matches = input.match(/\b(\w[^\s,;:!]*)\b/g);
	var counts = {};

	for (var i=0; i<matches.length; i++) {
		var word = matches[i].toLowerCase();
		counts[word] = typeof counts[word] === 'number' ? counts[word]+1 : 1;
	}
	return counts;
}

module.exports = Words;