//symbols are a new primitive type introduced in ES6
//symbols are unique and immutable
//symbols can be used as keys in objects
//symbols can be used to define object properties that should not be accessible by code outside the object
//symbols can be used to define object properties that should not be accessible by code outside the object

const mySymbol = Symbol();
console.log(typeof mySymbol);
console.log(mySymbol.toString());
console.log(Symbol("foo").toString());
console.log(Symbol("foo") === Symbol("foo"));
console.log(Symbol.for("foo") === Symbol.for("foo"));
console.log(Symbol.for("foo") === Symbol("foo"));
console.log(Symbol.keyFor(Symbol.for("foo")));
console.log(Symbol.keyFor(Symbol("foo")));
let myObject = {};
myObject[mySymbol] = "foobar";
console.log(myObject[mySymbol]);
console.log(myObject);
console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.getOwnPropertySymbols(myObject));
console.log(Reflect.ownKeys(myObject));
let myObject2 = {
    [Symbol("myMethod")]: function (arg) {
        console.log(arg);
    }
};
myObject2[Symbol("myMethod")]("foo");
console.log(Object.getOwnPropertyNames(myObject2));
console.log(Object.getOwnPropertySymbols(myObject2));
console.log(Reflect.ownKeys(myObject2));
let myObject3 = {
    [Symbol("myMethod")](arg) {
        console.log(arg);
    }
};
myObject3[Symbol("myMethod")]("foo");
console.log(Object.getOwnPropertyNames(myObject3));
console.log(Object.getOwnPropertySymbols(myObject3));
console.log(Reflect.ownKeys(myObject3));
let myObject4 = {
    [Symbol("myMethod")]: (arg) => console.log(arg)
};

const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2);
console.log(Symbol());
console.log(Symbol("foo"));

//the reason to use symbols is to create unique properties in objects
let student = { name: "John" };
let id = Symbol("id");
student[id] = 12345;
console.log(student[id]);
console.log(student);
console.log(Object.getOwnPropertyNames(student));

let student2 = { name: "John" };
let id2 = Symbol("id");
student2[id2] = 12345;
console.log(student2[id2]);
console.log(student2);
console.log(Object.getOwnPropertySymbols(student2));
