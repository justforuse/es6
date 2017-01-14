var p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject(new Error("Fail"))
	}, 3000)
})

var p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(p1)
	}, 2000)
})

p2.then(result => console.log(result))
p2.catch(error => console.log(error))
