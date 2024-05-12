const fruits = ["apple", "banana", "orange"];
const food = ["momo", "chowmein", "burger"];

//Non-reliable method:
fruits.push(food);
/*this will not concat two arrays but instead use food array as
the 3rd index
Hence: 3rd index is a array in itself and to access its value */

console.log(fruits[3][0]); //returns momo 


//Another way:
const newArr = fruits.concat(food); 
//Note: concat must be used in a new variable as it returns a new array


//Best method (spread operator):

/*The ... converts the array into individual datas */
const hungry = [...fruits, ...food];


//Converting string to array:
console.log(Array.from("Sabin"))
