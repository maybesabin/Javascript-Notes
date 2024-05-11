const a = 100; //this is automatically a number

//another way to define number
const num = new Number(100); //this gives us different properties

//Example:
console.log(num.toString().length); //converts 100 to string and gives length as 3

//Important functions: 
console.log(num.toFixed(2)); //returns 2 decimal values i.e 100.00

const num2 = new Number(200.5534);
const num3 = new Number(200.4545);

//it makes 3 number before decimal precise
console.log(num2.toPrecision(3)); //returns 201
console.log(num3.toPrecision(3)); //returnss 200

//Note: only use when you are fixed about the amount of numbers before decimal