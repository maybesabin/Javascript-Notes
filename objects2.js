//objects can be defined in two ways:

//1. Singleton
// Object.create 

//2. Object Literals

const myObj = {
    name: "Sabin",
    "location" : "Dang",
    age: 18,
    email: "sabin@gmail.com"
}

//in objects we can access values using keys or indexes unlike in arrays

//Access Methods:
console.log(myObj.name);

console.log(myObj["name"]);
//this is a better way to define it because we can access the string values using it

console.log(myObj["location"]);
/*in this example we can access the string value of location by using this method which is
not possible using the myObj.location method */


//Object Freeze

myObj.email = "sabin123@gmail.com";
// Object.freeze(myObj); //freeze basically prevents overwriting of objects
myObj.email = "highsabin@gmail.com";
console.log(myObj.email);

//functions in object
myObj.greet = function(){
    console.log(`Hello, ${this.name}!`); //string interpolation
}

console.log(myObj.greet); //this will return anonymous functions
console.log(myObj.greet()); //this will actually run the function


//Using symbols in objects

//Defining a symbol:
const mySymbol = Symbol("hello");

const myObj2 = {
    [mySymbol] : "hello" //symbol is defined in enclosed big brackets
}

console.log(myObj2.mySymbol); // by this the value is taken as a string not a symbol
console.log(myObj2[mySymbol]); //by this the value is taken as a symbol i.e correct way