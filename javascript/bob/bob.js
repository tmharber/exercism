var Bob = function() {};

Bob.prototype.hey = function(input) {
	if (input.toUpperCase() === input && input.match(/[a-z]/i)) {
		return 'Whoa, chill out!';
	}
	else if (input.slice(-1) === '?') {
		return 'Sure.';
	}
	else if (!input.trimLeft()) {
		return 'Fine. Be that way!';
	}
	else {
		return 'Whatever.';
	}	
};

module.exports = Bob;
