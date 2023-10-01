const Soup = require('../index.js');


function SoupVary(obj) {
	let thing = Soup.from(obj).toLowerCase()[this.type];
	this.constructor.prototype.VaryFunction = thing.bind(this);
	let returns = this.VaryFunction();
	delete this.constructor.prototype.VaryFunction;
	return returns;
}


Soup.newF("vary", SoupVary);
