function timeout(ms){
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, "done");
	})
}

timeout(2000).then((value) => {
	console.log(value);
})

// setTimeout(function(name, value){
// 	console.log(name, value);
// }, 2000, "allen", 23)