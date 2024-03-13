//1:- CallBack function
//parameter and argument?
// A function calling inside another function is called callback function.

function greet(name, CallBack){
    console.log("hii " + "" + name);
    CallBack();
}
//function callback

function callMe(){
    console.log("I am callBack function");
}

//passing function as a argument 
greet("Mohit", callMe);


//Q:- Write call back function to print number from 1 to 7 , in which 1 print should be print after 1 sec.
// function printNumber(){
//     setTimeout(()=>{
//         console.log("1");
//     },1000);
//     setTimeout(()=>{
//         console.log("2");
//     },2000);
//     setTimeout(()=>{
//         console.log("3");
//     },3000);
//     setTimeout(()=>{
//         console.log("4");
//     },4000);
//     setTimeout(()=>{
//         console.log("5");
//     },5000);
//     setTimeout(()=>{e3
//         console.log("6");
//     },6000);
//     setTimeout(()=>{
//         console.log("7");
//     },7000);
// }
// printNumber();

// function printNumber(){
//     for(let i=1; i<=7; i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000);
//     }
// }
// printNumber();


//2:- Promises

const promise = new Promise((resolve, reject)=>{
    resolve()
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("1");
    },1000);
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("2");
    },2000);
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("3");
    },3000);
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("4");
    },4000);
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("5");
    },5000);
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("6");
    },6000);
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("7");
    },7000);
})