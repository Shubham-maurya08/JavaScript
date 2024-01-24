//Objects

// var User = {
//     name: "Shubham",
//     profession: "Developer",
//     hobbies: ["coding", "reading"]
// }

// // console.log(User.name, User.profession);
// console.log(`${User.name}`);

//We have student list in which student name 

// let student = {};
// student.name = "Mohit";
// student.age = 25;
// student.rollnumber = 3456;

function user(name,age,rollnumber){
    this.name = name;
    this.age = age;
    this.rollnumber = rollnumber;
}
let student0 = ["Shubham", 25, 6789];
let student1 = ["Mohit", 23, 3456];
// console.log(student1,student0);

//using spread operator
let student3 = [...student0, ...student1];
console.log(student3);