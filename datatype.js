/* 
undefined, null, boolen, string, symbol(immutabble primitive value that is unique), number and object(key value pairs)
primitive value types: string, number, boolen, undefined
reference types: object, array, function
JS is case-sensitive
*/


var myName = "Charlotte" //used in the whole program
var myStr = "I am a \"double quoted\" string inside\"double quoted\" string"
var myURL = "<a href=\"http:google.com\" target=\"_blank\">link<\a>";
var myurl = '<a href="http:google.com" target="_blank">link<\a>'; //single quotation without back slash

/*
\' single quote
\" double quote
\\
\n newlibne
\r carriage return 
\t tab
\b backspace
\f form feed
*/

myName = 8
myName++; //incremental number
myName--; //decremental number
console.log(myName);

let ourName = "freeCodeCamp"; //only ued in within the scope of where you declared that 
let isApproved = true; // JS is dynamic language
let person = {
    name:'Charlotte',
    age:28
};
console.log(person);

const pi = 3.1415 //can never change

var a;
var b = 2;
console.log(a)
a= 7;
b = a;
console.log(a)
// value of constant can not be changed 
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate)


//change the value Way 1: dot notation
person.age = 52
person.name = 'Carlos Ruiz'
console.log(person);

//change the value Way 2: bracket notation
person['name'] = 'Kids';
person['age'] = 3;

let selection = 'name';
person[selection] = 'CRbibi';
console.log(person.name);

//array
let selectedColors = ['red','blue','yellow','purple']
console.log(selectedColors)
console.log(selectedColors[0])
selectedColors[2] = 999
console.log(selectedColors.length) //object's property

//function
function greetbibi() {
    console.log('Carlos Ruis is my bibi');
}

greetbibi();

function greet(name) {
    console.log(name + ' is my bibi');
}

greet('CR');

function square(number){
    return number * number
}
let number = square(999);
console.log(number);
console.log(square(88));
