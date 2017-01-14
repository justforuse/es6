// let obj = {
// 	* [Symbol.iterator](){
// 		yield "hello";
// 		yield* "world";
// 	}
// }
// for(let x of obj){
// 	console.log(x);
// }
"use strict"
for(let i of "hello"){
	console.log(i);
}