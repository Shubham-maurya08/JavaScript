//String Concatenation
//concat
// let str1 = "I am";
// let str2 = " Developer";
// // let str3 = str1+str2;
// let str3 = str1.concat(str2);
// console.log(str3);

// //slice
// let name = "You will be an amazing developer";
// // let newmessage = name.slice(7, 15); //slicing content start from 7th index and end on 15th.
// let newmessage = name.slice(-17, -10); //slicing will be start from last 

// console.log(newmessage); 


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

// var str = "1,2,3,4,5";
// var arr = str.split(",");
// console.log(arr);
// document.write(arr[0]);
// document.write("<br>");
// document.write(arr[1]);

//________________________________________
//Questions-: 1

// let a = 5;
// star = "";
// for(let i = 1; i <= a; i++){
//    star += "*" + " ";
//    console.log(star);
// }
//Output:

//Questions-: 2

// let a = 8;
// star = "";
// for(let i = 1; i <= a; i++){
//    star += i + " ";
//    console.log(star);
// }


// for (let i = 0; i < 5; i++) {
//     //spaces
//     let str = "";
//     for (let s = 1; s <= 4 - i; s++) {
//         str = str + " ";
//     }

//     //stars
//     for (let j = 0; j <= i; j++) {
//         str = str + "*";
//     }
//     console.log(str);
// }


for (let i = 0; i < 5; i++) {
    //spaces
    let str = "";
    for (let s = 1; s <= 4 - i; s++) {
        str = str + " ";
    }

    //stars
    for (let j = 0; j <= i; j++) {
        str = str + "*" + " ";
    }
    console.log(str);
}
//Output: Pyramid


