test = () =>{
    let name = "sabin";
    console.log(this.name); //this will return undefined 
                            //"this" only works on objects
}

//implicit return method

test2 = (num1,num2) => (num1+num2);
console.log(test2(1,2));



//Immediately Invoked Function Expression (IIFE):
/*the function that runs immediately and is used to remove pollution of global scope */

(function database(){
    console.log("DB connected!");
})();


( () => {
    console.log("DB connected!");
})();


/*if we run two IIFE simultaneously it will throw an error because
js doesnt know when to end one IIFE. So, to instruct it we use semicolon */


//we can also do this:

( (name) => {
    console.log(`Hello! ${name}`)
} ) ("Sabin");

