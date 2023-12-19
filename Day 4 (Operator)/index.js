let a = 55;
//console.log(a);

document.write(a);
// window.alert(a);

// Not defined, Undefined, Null
// Not defined = Any variable which we have try to access but not declared will throw us a referance error: Not Defined.
//console.log(myapp);
//it will show error because myapp is not declared.

let myapp;
console.log(myapp);
myapp = "whatsapp"
console.log(myapp); 
//Undefined = If a variable is declared but not assigned any value yet, but if we try to access that variable then we get the error as undefined.


let samworld = null; 
console.log(samworld);
samworld = 100;
console.log(samworld);
//Null = Its a default value assigned by a user to the variable as long as the variable has not been assigned.


// Operators
// Assignment Operators
let name = "shubham"

// Arithmetic Operators
// +, -, *, /, %.

//Way-1
let arun = 3;
let kunal = 43;
let aryan = arun + kunal;
console.log(aryan);

//way-2
let num = 50;
let num1 = 65;
console.log(num + num1);

let sub = 60;
let sub1 = 50;
console.log(sub - sub1);

let mult = 60;
let mult1 = 50;
console.log(mult * mult1);

let dev = 200;
let dev1 = 10;
console.log(dev / dev1);

let per = 100;
let per1 = 5;
console.log(per % per1);