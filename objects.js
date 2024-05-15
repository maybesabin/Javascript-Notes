//this keyword is used to access the values (current context) inside of a scope

const user = {
    name: "Sabin",
    age: 18,

    welcomeMessage : function (){
        console.log(`Welcome! ${this.name}.`);
        //if we don't use this in this line, it will throw an error.

        //console.log(this) this will print the whole objects
    }
}

user.welcomeMessage(); //it'll give sabin
user.name = "Rahul";
user.welcomeMessage(); //it'll give rahul because we changed the current context of name

console.log(this); 
//this will return empty object because the js we are using is on node enviroment ani esma global object kei ni xaina
/*but if we run this code in browser's terminal it will give all the window functions because window is the ultimate
global object */