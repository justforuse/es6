var p1 = new Promise(function(resolve, reject){
    throw new Error("my error");
})

// p1.then(function(r){
//     console.log("resolve");
//     console.log(r);
// }, function(e){
//     console.log("reject");
//     console.log(e);
// })

// p1.then(function(res){
//     console.log(res);
// }).catch(function(e){
//     console.log("error");
//     console.log(e);
// })

var p2 = new Promise(function(resolve, reject){
    // 虽然使用resolve，但是出错依旧走reject回调
    resolve(x+2);
})

p2.then(function(r){
    console.log("resolve");
    console.log(r);
}, function(e){
    console.log("error");
    console.log(e);
})