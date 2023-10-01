const Soup = require('../index.js');


function SoupFirst(offset=0) {
	let entry = this.entries[0+offset];
	return (this.type == "pair") ? {key: entry[0], value: entry[1], index: 0} : entry[1];
}


Soup.newF("first", SoupFirst);
Soup.newF("front", SoupFirst);
Soup.newF("start", SoupFirst);
