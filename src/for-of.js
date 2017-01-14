let obj = {
	"name":"allen",
	"1":"1111",
	99:99,
	11:11,
	"age":23
}
for(let i in obj){
	console.log(obj[i]);
}

console.log("break");
for(let i of Object.keys(obj)){
	console.log(i);
}