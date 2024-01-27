//Using Function based
function car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new car ('Eagle', 'Talon TSi', 1993);
console.log(car1);

//Using Class based 
class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(10,10);
console.log(square);


//Questions
// function sum(p1,p2,p3){
//     this.p1 = p1;
//     this.p2 = p2;
//     this.p3 = p3;

//     return this.p1+this.p2+this.p3; 
// }

// const sum1 = new sum (1,2,3);
// console.log(sum1);


//Q7
function checksum(Obj) {
    return Obj.p1 + Obj.p2 + Obj.p3;
  }
  const object = {p1: 1, p2: 2,p3: 3};
  
  const sum = checksum(object);
  console.log(sum);

//Q6
function multiply(N, id, houseNo){
    this.N = N;
    this.id = id;
    this.houseNo = houseNo;
    // this.id = id * N;
    // this.houseNo = houseNo * N;
    return this.id*this.N, this.houseNo*this.N;
}

const N1 = new multiply(2,12,146);
console.log(N1); 