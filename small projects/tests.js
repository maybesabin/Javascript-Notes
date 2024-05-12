//1. function to return sum
/*
sum = (a,b) =>{
    return a+b;
}

console.log(sum(2,4));
*/


//2. Max number in a array
/*
function largest(arr){

    let max = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }

    return max;
}

let arr = [0,1,2,3,10];
console.log("The largest number is " + largest(arr));
*/


//3. Palindrome string or not
/*
checkPalindrome = (str) =>{
    return true? str === str.split('').reverse('').join('') : false;
}

console.log(checkPalindrome("oho"));
*/


//4.Reverse given string
/*
reverse = (str) =>{
    return str.split('').reverse('').join('');
}

console.log(reverse("meow"));
*/


//5. Takes array and returns even numbers
/*
evenNumbers = (arr) => {
   return arr.filter(num => num%2===0);
}
//.filter returns array with matched condition

let arr = [0,1,2,3,4,5,6];
console.log(evenNumbers(arr));
*/



//6.Factorial
/*
factorial = (num) =>{
    if(num==0 || num == 1){
        return 1;
    }

    else{
        return num*factorial(num-1);
    }
}

console.log("The factorial is: "+factorial(5));
*/


//7. Prime or not
/*
checkPrime = (num) =>{
    let count = 0;
    for(var i=1; i<=num; i++){
        if(num % i === 0){
            count++;
        }
    }

    if(num<=1){
        return false;
    }

    else if(count==2){
        return true;
    }

    else{
        return false;
    }

}

console.log(checkPrime(3));
console.log(checkPrime(10));
console.log(checkPrime(11));
*/




