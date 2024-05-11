console.log(Math.abs(-10)); //absolute
console.log(Math.ceil(4.2)); //top value
console.log(Math.floor(4.2)); //bottom value
console.log(Math.round(4.6)); //round off
console.log(Math.max(4,5,6,7,8)) //max & min

//Important:
console.log(Math.random(0,10)); //always value between 1 and 0

console.log(Math.floor((Math.random()*10)+1)); //we do +1 to avoid getting 0


//For a range of values;
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)+min)); //+min to get minimum value of 10;