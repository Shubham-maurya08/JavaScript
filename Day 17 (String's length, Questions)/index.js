//word.length

// var newMessage = "PrepBytes java";
// console.log(newMessage.length);

// var str = "Hello Shubham";
// var x = str.length;
// console.log(x);

//Question:-
// let str = "Hi Prepbytes";
// let result = str.slice(3, 12);
// console.log(result);

//Question: find the an element at index 11 in "Welcome to GeeksforGeeks"
// let str = "Welcome to GeeksforGeeks";
// console.log(str.slice(11));

//Question: Using replace() Method "   Welcome    to   Geeks    for   Geeks   "  Remove multiple spaces with single space
// let str =  "   Welcome    to   Geeks    for   Geeks   ";
// let res = str.replaceAll("  ", " ")
// console.log(res);

//Question: Write a JavaScript function to extract a specified number of characters from a string.  "Robin Singh" print the output Robi
// let str = "Robin Singh";
// let res = str.substring(0,4);
// console.log(res);

//Write a JavaScript function to count substrings in a string.  console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
//Output:
//2
function str(a){
    str = a.split(",");
    console.log(str.length);
}
str("'The quick brown fox jumps over the lazy dog','the'");