"use strict";

var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject(new Error("Fail"));
	}, 3000);
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(p1);
	}, 2000);
});

p2.then(function (result) {
	return console.log(result);
});
p2.catch(function (error) {
	return console.log(error);
});