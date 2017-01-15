"use strict";

function timeout(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(resolve, ms, "done");
	});
}

timeout(2000).then(function (value) {
	console.log(value);
});

// setTimeout(function(name, value){
// 	console.log(name, value);
// }, 2000, "allen", 23)