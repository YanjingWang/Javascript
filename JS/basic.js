//jQuery $(document).ready(function() { ... });
//geeksforgeeeks.org/console-log-in-javascript/
//JS is dynamically typed language
//C++ is statically typed language eg. int a = 10;
console.time(`this entire code took...`);
console.log(`file file ' " of javascript`);
console.log([`hello world`, 20, 30, 40, 50]); // Array
console.log({ a: 1, b: 2, course: "fullstack", rating: 5 }); // Object
console.table({ a: 1, b: 2, course: "fullstack", rating: 5 }); // table
console.warn(`warning`); //yellow is warning, red is danger or error
console.error(`this is a big error`); //red is danger or error
console.timeEnd(`this entire code took...`);
// console.clear();

//var let const
var language = "javascript";
var course = "fullstack";
var rating = 5;

language = "python";
console.log(language, course, rating);

/* 
rules to write your variable names:
1. cannot start with numbers
2. can start with letters, numbers, _ or $
3. are case sensitive

camelCase:camelCase
kebab-case:kebab-case
snake_case:snake_case
PascalCase:PascalCase
*/

const marks = 35;  //constant: in large projects, we use const instead of var or let to avoid accidental changes, we don't want other developers to change our code/re-declare a const variable
console.log(marks);

let name = "john";
console.log(name); //crossover: let is block scoped, var is function scoped

{
    let name = "john";
    console.log(name);
}  //accessbility of let is only within the block
console.log(name);

var city = "london";
console.log(city);
{
    let city = "paris";
    console.log(city); //paris
}  //re-declaration of var is possible
console.log(city); //london

const arr = [1, 2, 3, 4, 5];
arr.push(6); //we can change the array, but we cannot re-declare the array
console.log(arr);

//datatype: primitive(stack) 
/*
1. string
2. number
3. boolean
4. null
5. undefined
*/
let coursename = "fullstack";
console.log("This course covers " + coursename + " web development");
console.log(`This course covers ${coursename} web development`); //template literals
console.log("The datatype of coursename is " + (typeof coursename));
//datatype:  reference(heap/derived)

/*
1. arrays
2. object literals
3. functions
4. dates
*/

let array = [1, 2, 3, 4, 5];
console.log(array);
console.log("The datatype of array is " + (typeof array));
array.push("Jack");
console.log(array);
console.log("The datatype of array is " + (typeof array));

let students = {
    name: "john",
    course: "fullstack",
    rating: 5
}
console.log(students);
console.log("The datatype of students is " + (typeof students));
console.table(students);
console.log("The datatype of students is " + (typeof students));

//Type coversion and type coercion
let var1 = 10;
var1 = String(var1);
console.log(var1, (typeof var1));

let var2 = true;
var2 = String(var2);
console.log(var2, (typeof var2));

let var3 = new Date();
var3 = String(var3);
console.log(var3, (typeof var3));

let arr4 = [1, 2, 3, 4, 5];
arr4 = String(arr4);
console.log(arr4, (typeof arr4));

let x = 944.5353;
x = x.toFixed(2); //toFixed() is used to fix the number of decimal places
console.log(x, (typeof x));

let y = Number("944.5353");
y = parseFloat("944.5353"); //parseFloat() is used to convert string to float   
console.log(y, (typeof y));

//Type coercion
let mystr = "698";
let mynum = 34;
console.log(mystr + mynum); //string + number = string

let variable1 = "web development";
let variable2 = "fullstack";

let variable3 = variable1.concat("  ", variable2);
console.log(variable3);

let html = "<h1> this is a heading </h1>" + "<p> this is a paragraph </p>";
console.log(html);

html = `<h1> this is a heading </h1>
        <p> this is a paragraph </p>`;
console.log(html);

console.log(html.length);
console.log(html.toUpperCase()); //string functions
console.log(html[2]); //indexing
console.log(html.indexOf("is")); //index of a word
console.log(html.charAt(3)); //character at a particular index
console.log(html.endsWith("paragraph")); //ends with a particular word
console.log(html.includes("is")); //includes a particular word
console.log(html.substring(1, 6)); //substring
console.log(html.slice(0, 4)); //slice
console.log(html.split(">")); //split
console.log(html.replace("this", "it")); //replace

let item = "fruits";
let price = 34;
let myhtml = `<h1> The price of ${item} is ${price} </h1> <h1> this is a heading </h1>`;
console.log(myhtml);
document.body.innerHTML = myhtml; //DOM manipulation: document object model HTMLdoc which is being linked to JSdoc, insde body tag, inner HTML is myhtml

//display myhtml in the webpage using DOM manipulation
//you don't have to write in html file, you can write in JS file and link it to html file


//Arrays and objects
//array is a collection of homogeneous data types

// let Array = [1, 2, 3, 4, 5, 'John'];
// let Array = new Array(1, 2, 3, 4, 5, 'John');
// console.log(Array);
// console.log(Array[5]);
// console.log(Array.length);
// console.log(Array[Array.length - 1]);

//predefined array functions called methods like push, pop, shift, unshift, splice, reverse, concat, sort
let Students = ['John', 'Bob', 'Harry', 'Steve', 'Jack'];
let a = Students.indexOf('Harry');
console.log(a);

let age1 = [12, 34, 56, 78, 90];
age1.sort();
console.log(age1);

let age2 = [12, 34, 56, 78, 90];
age2.reverse();
console.log(age2);

let alphebets = ['a', 'b', 'c', 'd', 'e'];
let numberic = [1, 2, 3, 4, 5];
let alphaNumeric = alphebets.concat(numberic);
console.log(alphaNumeric);

let fruits = ['apple', 'mango', 'banana', 'grapes'];
fruits.push('orange');
console.log(fruits);

let vegetables = ['potato', 'tomato', 'onion', 'cucumber'];
vegetables.pop();
console.log(vegetables);

let cars = ['BMW', 'Audi', 'Mercedes', 'Ferrari'];
cars.shift(); //removes the first element
console.log(cars);

let bikes = ['Harley', 'Ducati', 'Kawasaki', 'Triumph'];
bikes.unshift('Yamaha'); //adds the element at the beginning
console.log(bikes);

//objects are a collection of heterogeneous data types in the form of key-value pairs, objects are mutable
//object holds multiple values in the form of key-value pairs
// let student = { name: 'John', age: 34, course: 'fullstack' };
// console.log(student);
let user = new Object();
user.name = 'John';
user.age = 34;
user.course = 'fullstack';
console.log(user);  //dot notation to access the properties of an object, assign .name='John' to user


//conditional statements and switch case

//if-else
// if (5>0) {
//     console.log("5 is greater than 0");
// }
let age = 18;
if (age >= 18) { //if-else
    console.log("You can vote");
} else { console.log("You cannot vote"); }

console.log(age >= 18 ? "You can vote" : "You cannot vote"); //ternary operator

//switch case
switch (age) {
    case 18: console.log("You are 18");
        break;
    case 28: console.log("You are 28");
        break;
    case 38: console.log("You are 38");
        break;
    default: console.log("You are unknown");
        break;
} //without break, it will execute all the cases

//loops for memeory optimization and time optimization
//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

//forin loop
let student = { name: 'John', age: 34, course: 'fullstack' };
for (let key in student) { //forin loop is used to iterate over an object
    console.log(`${key} of student is ${student[key]}`);
}

var emploees = { name: 'John', age: 34, course: 'fullstack' };
for (var i in emploees) {
    console.log(i + "=" + emploees[i]);
}

//forof loop
let fruits1 = ['apple', 'mango', 'banana', 'grapes'];
for (let element of fruits1) { //forof loop is used to iterate over an array or string
    console.log(element);
}

//for each loop
let fruits2 = ['apple', 'mango', 'banana', 'grapes'];
fruits2.forEach(function (element, index, array) { //for each loop is used to iterate over an array or string
    console.log(element, index, array);
}); //we can execute a function on each item within an array: arrays, sets or maps

// //while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// } //while loop used when we don't know the number of iterations

let n = 1, m = 100;
while (n <= m) {
    console.log(n);
    n++;
} //print all the numbers between 1 and 100

//do-while loop
let j = 0;
do { console.log(j); j++; }
while (j < 10); //do-while loop used when we don't know the number of iterations
//the difference between while and do-while loop is that while loop checks the condition first and then executes the code, whereas do-while loop executes the code first and then checks the condition


//functions
function greet(name, greetText = "Greetings from Javascript") { //default parameter
    console.log(greetText + " " + name);
}
greet("John");

//function expression
let greet1 = function (name, greetText = "Greetings from Javascript") { //anonymous function (doesn't have a name)
    console.log(greetText + " " + name);
}
greet1("John"); //can't call the function before declaring it

let add = function (num1, num2) {
    return num1 + num2;
}
console.log(add(5, 6));

distance = (speed, time) => { //arrow function
    return speed * time;
}
console.log(distance(5, 6));





