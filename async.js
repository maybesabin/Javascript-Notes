// function findSum(x,y){
//     return x+y
// }

// function result(){
//     console.log(findSum(2,6))
// }

// setTimeout(result, 2000)
// console.log("Hello")

// //in this example even though the setTimeout is above console.log, it gets run after
// //console.log because its a asynchronous task

const fs = require("fs") //fs is also a async task

// fs.readFile("async.txt", "utf-8",function(err, data){
//     console.log(data)
// })


//cleaner way to use async- Promises

//my own async function
function myReadFile(){
    return new Promise(function(result){    //Promise takes function as argument
        fs.readFile("async.txt", "utf-8", function(err, data){
            result(data)
        })
    })
}

//callback for the function
function onCompletion(data){
    console.log(data)
}

myReadFile().then(onCompletion)