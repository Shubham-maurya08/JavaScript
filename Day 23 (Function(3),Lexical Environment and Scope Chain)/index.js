//Funtion = In order to execute a particular lines of code repetitiviely, 
// we can allocate them into a function which can then be called again and again as per required.

//Regular function
function multi(parameter1, parameter2) {
    console.log("Hello World");
}
multi(); //function calling (we can call it multiple time.) 

//Arrow function
const addition = ()=>{
    console.log("Hellow world");
}
addition();

//Function Expression
const substraction = function(){
    console.log("Hellow world");
}
substraction();

//-----------------------------
//Ex
function sayHi(){
    console.log("Hiii");
    let a = 3;
    let b = 5;
    let result = a + b;
    console.log(result);
}
sayHi();

//Ex
function add(num1, num2){
    let result = num1 + num2;
    return result;
}
// let returnResult = add(5,6); //way-1
console.log(add(5,6));          //way-2

//Ex
function multi(no1, no2){
    let res = no1 * no2;
    return res;
}
console.log(multi(9,3));


// The Lexical Environment and Scope Chain

let i = 5;
let j = 6;
function one(){
    console.log(i);
    two();
    function two(){
        console.log(j);
    }
    
}
one();

// var a = 9;
// var a = 10;
// console.log(a);
