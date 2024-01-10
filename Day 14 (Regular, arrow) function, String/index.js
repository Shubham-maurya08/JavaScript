// const firstname = "Shubham";
// const lastname = "Maurya";
// const age  = 25;

// const list1 = list(firstname, lastname, age);
// console.log(list1)


// function showmessage(){
//     alert("Hellow World");
// }
// showmessage();


function multiply(num1, num2){
    let result = num1*num2;
    return result;
}

let returnResult = multiply(7,9);
console.log(returnResult);


//-:arrow function
 const logMessage = () =>{
    console.log("This is arrow function");
 }
 logMessage();

 //String

 var name = "You will be Developer an amazing Developer";
//  let index = name.indexOf("Developer");
let index = name.indexOf("will" , 10);
 console.log(index);