//maps can contain objetcs and functions as keys
//maps are iterable and can be directly iterated using for of loop 
//maps are ordered, so the order of the elements is the same as the order in which they were inserted
//maps are not indexed, so there is no way to directly access an element of a map
//maps are not sparse, so there is no way to directly access an element of a map

let myMap = new Map(); //constructor

//to insert elements in a map we use the set() method and use get() method to retrieve the elements and use the has() method to check if an element exists in a map
let map2 = new Map();
map2.set("info", { name: "John", aage: 30 }); //key value pair key is info and value is an object
console.log(map2.get("info"));
console.log(map2.has("info"));
//to remove an element from a map we use the delete() method
map2.delete("info");
console.log(map2.has("info"));
//to remove all the elements from a map we use the clear() method
map2.clear();
console.log(map2.has("info"));
//to get the number of elements in a map we use the size property
console.log(map2.size);
//to iterate over the elements of a map we use the for of loop
let myMap2 = new Map();
myMap2.set(0, "zero");
myMap2.set(1, "one");
for (let [key, value] of myMap2) {
    console.log(key + " = " + value);
}
for (let key of myMap2.keys()) {
    console.log(key);
}
for (let value of myMap2.values()) {
    console.log(value);
}
for (let [key, value] of myMap2.entries()) {
    console.log(key + " = " + value);
}
//to iterate over the elements of a map we use the forEach() method
myMap2.forEach(function (value, key) {
    console.log(key + " = " + value);
});
//to create a map from an array of arrays we use the from() method
let myMap3 = new Map([[0, "zero"], [1, "one"]]);
console.log(myMap3.get(0));
console.log(myMap3.get(1));
//to create an array of arrays from a map we use the entries() method
let myMap4 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
console.log(myMap4.get(true));  // 7
console.log(myMap4.get({ foo: 3 }));  // undefined, because {foo: 3} !== {foo: 3}
let obj = { foo: 3 };
console.log(myMap4.get(obj));  // 7, because obj === obj
//to create an array from a map we use the keys() method
let myMap5 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
console.log(myMap5.keys());  // 7
console.log(myMap5.keys({ foo: 3 }));  // undefined, because {foo: 3} !== {foo: 3}
let obj2 = { foo: 3 };
console.log(myMap5.keys(obj2));  // 7, because obj === obj
//to create an array from a map we use the values() method
let myMap6 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
console.log(myMap6.values());  // 7
console.log(myMap6.values({ foo: 3 }));  // undefined, because {foo: 3} !== {foo: 3}
let obj3 = { foo: 3 };
console.log(myMap6.values(obj3));  // 7, because obj === obj
//to create an array from a map we use the entries() method
let myMap7 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
console.log(myMap7.entries());  // 7
console.log(myMap7.entries({ foo: 3 }));  // undefined, because {foo: 3} !== {foo: 3}
let obj4 = { foo: 3 };
console.log(myMap7.entries(obj4));  // 7, because obj === obj
//to create a map from an array we use the of() method
// let myMap8 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
// console.log(myMap8.of());  // 7
// console.log(myMap8.of({ foo: 3 }));  // undefined, because {foo: 3} !== {foo: 3}
// let obj5 = { foo: 3 };
// console.log(myMap8.of(obj5));  // 7, because obj === obj

//loop through a map
let myMap9 = new Map();
myMap9.set(0, "zero");
myMap9.set(1, "one");
for (let [key, value] of myMap9) {
    console.log(key + " = " + value);
}
for (let key of myMap9.keys()) {
    console.log(key);
}
for (let value of myMap9.values()) {
    console.log(value);
}
for (let [key, value] of myMap9.entries()) {
    console.log(key + " = " + value);
}
myMap9.forEach(function (value, key) {
    console.log(key + " = " + value);
});




//use objetcs and functions as keys
let keyString = "a string",
    keyObj = {},
    keyFunc = function () { };
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, { name: 'John', age: 40 }, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
console.log(myMap.size);
console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

