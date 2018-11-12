
var str = 'this is index';

var p = new Promise(function(resolve, reject) {
	setTimeout(function(){
		resolve(str)
	})
});

module.exports = p;

