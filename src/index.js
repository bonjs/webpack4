
var app = require('./app');


async function main() {
	console.log(app);

	document.getElementById('app').innerHTML = await app
	document.body.style.backgroundColor = '#cde'
}
main();


module.hot.accept();
