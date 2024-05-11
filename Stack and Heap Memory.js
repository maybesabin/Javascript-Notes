//Stack Memory is only for primitive data types
//Basically in stack memory the copy of the variable is taken

let a = "Hello World";
let b = a;
a = "Bye World";

console.log(a); //Bye World
console.log(b); //Hello World (b gets the copy of a);



//Heap Memory is for non primitive data types
//In Heap Memory the reference of original veriable is taken

let obj1 = {
    email: "sabinhamal@gmail.com",
    age: 19
}

let obj2 = obj1;
obj1.email = "123sabin@gmail.com";

console.log(obj1.email); //123sabin@gmail.com
console.log(obj2.email); //123sabin@gmail.com

//The reference value is changed
