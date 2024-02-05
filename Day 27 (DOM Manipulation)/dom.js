// console.log(window); //window is an object. which contains lots of predefined methods.
// console.log(window.document);
    
// const element = document.getElementById('text');
// console.log(element.innerText);

var element2 = document.getElementsByTagName("h1");
console.log(element2[0].innerText);
console.log(element2[1].innerText);
console.log(element2[2].innerText);

const element3 = document.getElementsByClassName("class1");
console.log(element3[1].innerText);

const element4 = document.getElementsByTagName("h1");
element4[2].innerText = "Hello World";
console.log(element4[2].innerText);

function data(){
    const fun_ele = document.getElementsByClassName("class");
    console.log(fun_ele[0].innerText);
}
data();

function flexChange(){
    const element5 = document.getElementsByClassName("container");
    element5[0].style.flexDirection = "column";
    const element6 = document.getElementsByClassName("flex");
    element6[1].style.backgroundColor = "red";
    element6[1].style.borderRadius = "50%";  
}
flex();