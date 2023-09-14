//sets are iterable and can be directly iterated using for of loop
//sets are ordered, so the order of the elements is the same as the order in which they were inserted
//sets are not indexed, so there is no way to directly access an element of a set
//sets are not sparse, so there is no way to directly access an element of a set

//basic syntax of a set
let mySet = new Set(); //constructor
//to insert elements in a set we use the add() method and use has() method to check if an element exists in a set
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("some text");
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });
console.log(mySet.has(1));
console.log(mySet.has(3));
console.log(mySet.has(5));
console.log(mySet.has(Math.sqrt(25)));
console.log(mySet.has("Some Text".toLowerCase()));
console.log(mySet.has(o));
console.log(mySet.has({ a: 1, b: 2 }));
//to remove an element from a set we use the delete() method
mySet.delete(5);
console.log(mySet.has(5));
//to remove all the elements from a set we use the clear() method
mySet.clear();
console.log(mySet.has(1));
//to get the number of elements in a set we use the size property
console.log(mySet.size);
//to iterate over the elements of a set we use the for of loop
let mySet2 = new Set([1, 2, 3, 4, 5]);
for (let x of mySet2) {
    console.log(x);
}
//to iterate over the elements of a set we use the forEach() method
mySet2.forEach(function (value) {
    console.log(value);
}
);
//to create a set from an array we use the from() method
let mySet3 = new Set([1, 2, 3, 4, 5]);
console.log(mySet3.has(1));
console.log(mySet3.has(3));
console.log(mySet3.has(5));
//to create an array from a set we use the from() method
let myArray = Array.from(mySet3);
console.log(myArray);
//to create a set from a string we use the from() method
let mySet4 = new Set("Hello World");
console.log(mySet4.has("H"));
console.log(mySet4.has("e"));
console.log(mySet4.has("l"));
console.log(mySet4.has("o"));
console.log(mySet4.has(" "));
console.log(mySet4.has("W"));
console.log(mySet4.has("r"));
console.log(mySet4.has("d"));
//to create a set from a map we use the from() method
let myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
let mySet5 = new Set(myMap);
console.log(mySet5.has(0));
console.log(mySet5.has(1));
//to create a set from an array of arrays we use the from() method
let mySet6 = new Set([[1, 2], [3, 4], [5, 6]]);
console.log(mySet6.has(1));
console.log(mySet6.has(2));
console.log(mySet6.has(3));
console.log(mySet6.has(4));
console.log(mySet6.has(5));
console.log(mySet6.has(6));

