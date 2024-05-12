//Array in javascript can contain multiple data types unlike C
//Arrays are resizable

const arr = [1,2,3, "hello", true];

//Array Methods:
arr.push(6); //adds 6 at the end of array

arr.pop(); //removes last element

arr.unshift(10); //adds 10 at the start of array
/*unshift is rarely used due to the fact that we 
have to change the whole index of data inside array */

arr.shift(); //removes first element

arr.includes(10); //returns true or false

arr.indexOf(2); //returns index of 2


//Join of array:

const newArr = arr.join(); //join takes the array elements and converts to string
console.log(typeof arr); //this is an array
console.log(typeof newArr); //but this is an string


//slice & splice

const arr2 = [0,1,2,3,4,5];

const a = arr2.slice(0,3);
console.log(a); //[0,1,2]
console.log(arr2); //[0,1,2,3,4,5]


const b = arr2.splice(0,3);
console.log(b); //[0,1,2]
console.log(arr2); //[3,4,5]

/*The key difference between slice and splice is that in slice original array is not manupulated but in
splice original array is manipulated */

/*splice ma given portion original bata remove hunxa */

