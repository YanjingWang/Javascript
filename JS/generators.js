//ES6 is the lastest version of javascript
//yield keyword is used to pause and resume a generator function
//generator function is a special type of function that works as a factory for iterators. When it is executed it returns a new iterator object. A generator function is defined by adding an asterisk after the function keyword, and using the yield keyword to define the sequence of values that will be returned by the iterator:
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let myGen = myGenerator(); //it returns an iterator object
console.log(myGen.next());

let result;
do {
    result = myGen.next();  //it starts to iterate over the sequence
    console.log(result);
} while (!result.done);
for (let value of myGen) {
    console.log(value);
}
// let myGen = myGenerator();
// console.log(myGen.next());

