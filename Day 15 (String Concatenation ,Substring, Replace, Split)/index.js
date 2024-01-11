//String Concatenation
//concat
let str1 = "I am";
let str2 = " Developer";
// let str3 = str1+str2;
let str3 = str1.concat(str2);
console.log(str3);

//slice
let name = "You will be an amazing developer";
// let newmessage = name.slice(7, 15); //slicing content start from 7th index and end on 15th.
let newmessage = name.slice(-17, -10); //slicing will be start from last 

console.log(newmessage); 


// var str = "JavaScript String Methiods";
// var res = str.slice(0,10);
// console.log(res);


//Substring
// var str = "JavaScript String Methiods";
// var res = str.substring(1,4);
// console.log(res);


//Replace
// var str = "  JavaScript String Methods    ";
// // var res = str.replace("Methods", "Tutorial");
// // var res = str.replaceAll(" ", "-");
// var res = str.trim();
// console.log(res);


//split

var str = "1,2,3,4,5";
var arr = str.split(",");
console.log(arr);
document.write(arr[0]);
document.write("<br>");
document.write(arr[1]);