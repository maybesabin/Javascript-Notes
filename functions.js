//functions can be learned by ice cream example
/*The children can get ice cream from adults
but adults doing the same isn't justified */

function one(){ //one() is the adult here
    
    const firstName = "Sabin";

    function two(){ //two() is the children
        const lastName = "Hamal";
        console.log(firstName);
    }

    // console.log(lastName); this will throw error because global function cannot access child values
    two();
}

one();

//closure functions:
/*those functions in which there is a nested function and the child function can access the values 
of the parent function */


//++++++++++++++++++++++++++++++ Unique +++++++++++++++++++++++++++//

test(7); //we can run function before its declaration
function test(num){
    return num;
}

test2(8); //but in this case we cannot because function is stored in a variable
const test2 = function(num){
    return num;
}