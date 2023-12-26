//Switch Case

// const marks = prompt("Enter your marks out of 50")
// let grade;
// switch(true){
//     case marks >= 41 && marks <= 50:
//         grade = 'A';
//         break;
//     case marks >= 31 && marks <= 40:
//         grade = 'B';
//         break;
//     case marks >= 21 && marks <= 30:
//         grade = 'C';
//         break;
//     case marks >= 11 && marks <= 20:
//         grade = 'D';
//         break;    
//     case marks >= 0 && marks <= 10:
//         grade = 'E';
//         break;
//     default:
//         grade = "Invalid Marks entered";
// }
// console.log(grade);

let a = parseInt(prompt("Enter the numbers"));
let b = parseInt(prompt("Enter the numbers"));
let c = parseInt(prompt("Enter the numbers"));

    if (a+b+c === 180) {
        if (a < 90 || b < 90 || c < 90) {
            console.log("Acute angle.");
        } else {
            console.log("Obtuse angle");
        }
    } else {
            console.log("try again");
  }

//class

// const A = parseInt(prompt("Enter your A value"));
// const B = parseInt(prompt("Enter your B value"));
// const C = parseInt(prompt("Enter your C value"));

// if (A + B + C === 180) {
//     if (A > 90 || B > 90 || C > 90) {
//         console.log("obtuse");
//     } else {
//         console.log("acute");
//     }
// } else {
//     console.log("Invalid Input");
// }

