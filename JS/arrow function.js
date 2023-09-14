//arrow function is a short hand syntax for writing regular function  in javascript
//arrow function is also called lambda function
//arrow function is used to write 1 liner function
//arrow function is used to write callback function
//arrow function is used to write higher order function
//arrow function is used to write anonymous function
//arrow function is used to write IIFE function
//arrow function is used to write generator function
//arrow function is used to write async function
//arrow function is used to write promise function
//arrow function is used to write async await function
//arrow function is used to write recursive function
//arrow function is used to write closure function
//arrow function is used to write currying function
//arrow function is used to write memoization function
//arrow function is used to write pure function
//arrow function is used to write impure function
//arrow function is used to write partial function
//arrow function is used to write composition function
//arrow function is used to write pipe function
//arrow function is used to write point free function
//arrow function is used to write function composition
//arrow function has limitations as well like you can't use arrow function as a constructor function and you can't use arrow function as a method function as well because arrow function doesn't have it's own this keyword and it doesn't have it's own arguments keyword as well and you can't use arrow function as a prototype function as well because arrow function doesn't have it's own prototype keyword as well 

//creating a regular function
// function func1() {
//     console.log("function 1 is executing");
// }
// //creating a function that takes another function as a parameter
// function func2(func1) {
//     console.log("function 2 is executing");
//     func1();
// }
// //calling the function that takes another function as a parameter
// func2(func1);
// create error function
//storing regular function inside a variable
// const func1 = function () {
//     console.log("function 1 is executing");
// }
// func1();
//arrow function
// const func1 = () => {
//     console.log("function 1 is executing");
// }
// func1();
// //storing regular function inside a variable
// const func1 = function () {
//     console.log("function 1 is executing");
// }
// func1();
// //arrow function in 1 line
// const func1 = () => "This is 1 liner function";
// console.log(func1());

//when you want to pass 1 argument to your arrow function you can remove the parenthesis
// const func1 = name => "This is 1 liner function " + name;
// console.log(func1("saksham"));
//when you want to pass more than 1 argument to your arrow function you can't remove the parenthesis
const func1 = (name, age) => "This is 1 liner function " + name + " " + age;
console.log(func1("saksham", 21));
