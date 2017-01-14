function* iterEntries(obj){
	let keys = Object.keys(obj);
	for(let i=0;i<keys.length;i++){
		let key = keys[i];
		yield [key, obj[key]];
	}
}

let myObj = {
	"name":"allen",
	"age":23,
	1:"1111"
}

for(let [key, value] of iterEntries(myObj)){
	console.log(key, value);
}