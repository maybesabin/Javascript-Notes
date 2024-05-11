const name = "Sabin";
const city = "Dang";

//Traditional Concat Method:
console.log(name + city); 

//Modern Method:
console.log(`My Name is ${name}. I live in ${city}`); //string interpolation
//this method is used in backend aswell


//Modern way of declaring string:
const newString = new String("Hello World");
//this method has many features such as prototype, length, count etc

//for eg:
console.log(newString.length);
console.log(newString[0]);
console.log(newString.__proto__);
console.log(newString.toUpperCase());
console.log(newString.charAt(2)); //shows character at index 2
console.log(newString.indexOf("H")); //shows character index

//Unique:
console.log(newString.substring(0, 5)); //it doesnt accept negative index
console.log(newString.slice(-4,8)); //it can accept negative index :starts from backwards


//More:

// String.trim() trims the spaces in the string
const String2 = "sabinhamal123@gmail.com";
console.log(String2.replace('123','456')) //changes 123 to 456

console.log(String2.includes("sabin")); //returns true/false