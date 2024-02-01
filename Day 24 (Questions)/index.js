//Q-1 We are interested in retieveing only the name of the students and all the names should be in caps.

// let studentRecord = [
//     {name:"Mohit", id: 533, marks: 98},
//     {name:"Yogi", id:200, marks: 45},
//     {name:"Wick", id:101, marks: 75},
//     {name:"MOhib", id:115, marks: 23}
// ]

// let arr = studentRecord.map(x => x.name.toLocaleUpperCase());
// console.log(arr);


//Q-2 Suppose we have the same dataset, but this time we want to get the details of the students which scored more the than 50 marks.
// let studentRecord = [
//     {name:"Mohit", id: 533, marks: 98},
//     {name:"Yogi", id:200, marks: 45},
//     {name:"Wick", id:101, marks: 75},
//     {name:"MOhib", id:115, marks: 23}
// ]

// let arr = studentRecord.filter(x => x.marks > 50);
// console.log(arr);

//Q-3 Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let studentRecord = [
    {name:"Mohit", id: 533, marks: 98},
    {name:"Yogi", id:200, marks: 45},
    {name:"Wick", id:101, marks: 75},
    {name:"MOhib", id:115, marks: 23}
]

let arr = studentRecord.filter(x => x.marks > 50 &&  x.id > 120); // not complete
console.log(arr);

//Q-4 Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
// let studentRecord = [
//     {name:"Mohit", id: 533, marks: 98},
//     {name:"Yogi", id:200, marks: 45},
//     {name:"Wick", id:101, marks: 75},
//     {name:"MOhib", id:115, marks: 23}
// ]
// let sum = studentRecord.reduce((a,b) => a + b.marks, 0);
// console.log(sum);

//Q5 This time we wants to get only the names of the students who scored more than 50 marks from the same.
// let studentRecord = [
//     {name:"Mohit", id: 533, marks: 98},
//     {name:"Yogi", id:200, marks: 45},
//     {name:"Wick", id:101, marks: 75},
//     {name:"MOhib", id:115, marks: 23}
// ]
// let arr = studentRecord.filter(x => x.marks > 50);
// console.log(arr.map(a=>a.name));

//Q-6 This time we are required to print the sum of marks of students with id > 120?
// let studentRecord = [
//     {name:"Mohit", id: 533, marks: 98},
//     {name:"Yogi", id:200, marks: 45},
//     {name:"Wick", id:101, marks: 75},
//     {name:"MOhib", id:115, marks: 23}
// ]
// let arr = studentRecord.filter(x => x.id > 120);
// console.log(arr.reduce((a,b)=> a + b.marks, 0));

//Q-7 This time we are required to print the total marks of the students with marks greater than 
//    50 after a grace of 15 marks has been added those student who have scored the less than 50 marks.
// let studentRecord = [
//     {name:"Mohit", id:533, marks: 98},
//     {name:"Yogi", id:200, marks: 45},
//     {name:"Wick", id:101, marks: 75},
//     {name:"MOhib", id:115, marks: 23}
// ]
// let arr = studentRecord.filter(x => x.marks < 50);
// console.log(arr.reduce((a,b) => a + b.marks + 15, 0));



// 45+15=60
// 23+15=38
