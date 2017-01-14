var p1 = new Promise(function(resolve, reject){
	resolve("hello");
})

p1.then(function(res){
	console.log(res);
	return "world";
}).then(function(res2){
	console.log(res2);
})