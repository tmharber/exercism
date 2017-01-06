var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
	name = input || 'World';
	return 'Hello, ' + name + '!'
};

module.exports = HelloWorld;
