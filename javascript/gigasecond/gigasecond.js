var Gigasecond = function(oldDate) {
	this.oldDate = oldDate;
}

Gigasecond.prototype.date = function() {
	var newDate = new Date();
	newDate.setTime(this.oldDate.getTime() + 1000000000000);
	return newDate;
}

module.exports = Gigasecond;