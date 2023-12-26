//Q. Write a program that assigns a letter grade based on a numerical grade.

let score = prompt("Enter your number");
let grade;
if(score >= 90){
    console.log("A");
}else if(score >= 80){
    console.log("B");
}else if(score >= 70){
    console.log("C");
}else if(score >= 60){
    console.log("D");
}else if(score >= 50){
    console.log("E");
}else{
    console.log("Fail")
}

//Question-2

let output;
let input = prompt('enter a character');
if (input === 'p' || input === 'P') {
    output = 'PrepBytes'
    console.log(output);
} else if (input === 'z' || input === 'Z') {
    output = 'Zenith'
    console.log(output);
} else if (input === 'e' || input === 'E') {
    output = 'Expert Coder'
    console.log(output);
} else if (input === 'd' || input === 'D') {
    output = 'Data Structure'
    console.log(output);
} else {
    console.log('Invalid input');
}
