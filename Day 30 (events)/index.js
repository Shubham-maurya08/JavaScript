// function showTime(){
//     var date = new Date();
//     var hrs = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();

//     var time = hrs + ":" + min + ":" + sec + "";
//     document.getElementById("MyClockDisplay").innerText = time;

//     document.getElementById("MyClockDisplay").textContent = time;

//     setTimeout(showTime,1000);
// }
// showTime();

// //Q:2
// document.getElementById("print-button").addEventListener("click",function(){
//     var dropdown = document.getElementById("dropdown");
//     var result = document.getElementById("result");

//     result.innerHTML = "Dropdown:" + dropdown.options[dropdown.selectedIndex].text;
// });

//_________________________________________________________________________________

function printValue(){
    const ele = document.querySelector("#year");
    const ele1 = ele.value;
    document.querySelector("#printValue").append(ele1);
}

// Create a form element
const form = document.createElement('form');

// Set form attributes
form.setAttribute('method', 'POST');
form.setAttribute('action', '/submit');

// Create input elements
const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'name');
inputName.setAttribute('placeholder', 'Enter your name');

const inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('placeholder', 'Enter your email');

const inputMessage = document.createElement('textarea');
inputMessage.setAttribute('name', 'message');
inputMessage.setAttribute('placeholder', 'Enter your message');

// Create a submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

// Append input elements and submit button to the form
form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(inputMessage);
form.appendChild(submitButton);

// Append the form to the document body
document.body.appendChild(form);
