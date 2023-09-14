//all objects in js are instances of Objects are typical objects inherit from the object dot proptotype Object.prototype
//Object.prototype is the top level object in js, it has many build in methods and properties such as toString() and hasOwnProperty() and valueOf()
//Object.prototype inherits all the properties from this Object.prototype and it change through the prototype chain unless it is overridden / subketcs and methods subject to those changes are overriden along the chain. It's dandrous to modify Object.prototype directly, it's better to use Object.create() to create a new object with Object.prototype as it's prototype. It's override or extend the object behavior.



//JS is a propertyped language, which means almost all objects are instances of Object, and Object inherit from Object.prototype, so all objects have access to the properties and methods defined in Object.prototype. Whenever we create a function, JS engine adds this propotype property inside a function. 
//Propotype is an object that we can attach methods and properties in a propotype object, and when we create a new object from this function, all the methods and properties in the prototype object will be accessible to the new object.
const hasOwnProperty = require("has");
hasOwnProperty("name"); //true
isPropertyOf("name"); //false
propertyIsEnumerable("name"); //false 
toLocalString("name"); //"[object Object]"
toString("name"); //"[object Object]"
valueOf("name"); //"[object Object]"

function Motorcycle(make, model, year) {
    this.make = "Kawasaki";
    this.model = "Ninja";
    this.year = "2020";
}

Motorcycle.prototype.getAge = function () { //prototype is an object that we can attach methods and properties in a prototype object, and when we create a new object from this function, all the methods and properties in the prototype object will be accessible to the new object.
    return new Date().getFullYear() - this.year;
}

Motorcycle.prototype.motoGP = function () {
    console.log("Always wear a helmet while riding / racing motorcycle");
}

let bike = new Motorcycle("Kawasaki", "Ninja", "2020");
bike.toString(); //"[object Object]" JS is using the prototype object into string 1. fine the prototype and the methods of an object 2. implement the inheritance in JS 3. check  toString method is attched bike variable or not then convert the prototype object into string 4. return the string value 

// bike_proto_link  it points to the prototype object of the motorcycle function, if it still can't find it there then it will go up in hierachy and checks the prototype of the objective function bc all objects are derived from the object in JS.

