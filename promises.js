const promiseTest = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This is a async task.");
        resolve();
    },1000)
});

promiseTest.then(function(){
    console.log("Task Done");
})