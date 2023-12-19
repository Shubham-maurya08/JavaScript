//Keyword in js 1. let 2. var 3. const

var a = 10;
var b = "hello world";
var c = null

let d = 6
let num = 'hi'

const cast = 55
const ele = 'hey...'

// We can store any type of value in our Keyword. dynamic nature
//Hoisting

                    // JS is always execute the code line by line.
var shubham = 26; //global-scope(we can redeclare the var name again and again.)
//let shubham = 26; // let block-scope
//const shubham = 26; //block-scope
var shubham = 50;
console.log(shubham);

let sam = 10; //we can not redeclare variable again and again but we can reassign value.
    sam = 40;
    console.log(sam);

const samworld = 25;    
    samworld = 100; //Never re-declare or reassign the value in const keyword.
    console.log(samworld);

//var
//1. They can be declare in a line and then initialized with a value in another lines.
//2. They can be also declare and initialized in the same line.
//3. They can be redecalred and but can be re-initialized.
//4. We can have two variable with same name in var keyword.

//let
//1. They can be declare in a line and then initialized with a value in another lines.
//2. They can be also declare and initialized in the same line.
//3. They can not be redecalred and but can be re-initialized.
//4. We can not have two variable with same name in let keyword.

//Const
//1. They can be declared and initialized with a value in same line only.
//2. They can not be redecalred and cannot be re-initialized.
//3. We can not have two variable with same name in const keyword.
