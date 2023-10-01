const Soup = require('../index.js');


function SoupSplice(index, amount, /**/) {
	var args = Array.from(arguments);
	args.shift();
	args.shift();

	if (this.type == "list") this.insides.splice(index, amount, ...args);

	else if (this.type == "pair") {
		let thing = Object.entries(this.insides);

		if (!(args[0] instanceof Array) && args[0] instanceof Object) args = Object.entries(args[0]);

		thing.splice(index, amount, ...args);

		this.insides = Object.fromEntries(thing);
	}
}


Soup.newF("splice", SoupSplice);
