//objects are created by using the new keyword followed by the constructor function, it contains related code and data representing info about the thing we are trying to model and the functionality that we want it to have. Object data is stored in properties and object functions are stored in methods, maing it easy to strcture and organize complex code.
//object literal syntax is the easiest and most common way to create objects: singletons, it means that we only need one instance of the object, it is not a good idea to use this syntax if we need to create multiple objects of the same type, because we would have to repeat the same code over and over again, which is not very efficient.When we make a change to the object, we have to make the same change to all the instances of the object, which is not very practical. So--> constructor function
//constructor function is a function that initializes an object

//objects created using object literal(comma separated list of name-value pairs wrapped in curly braces)
var motorcycle = {
    brand: "Honda",
    model: "CBR",
    year: 2015,
    color: "red",
    description: function () {
        return "The motorcycle is a " + this.color + " " + this.year + " " + this.brand + " " + this.model;
    }
};
console.log(motorcycle);
console.log(motorcycle.description());

//objects created using constructor function
//let us to create multiple objects of the same type, if change is made to one object, it will not affect the other objects, it is more efficient and practical
//it's a blueprint for creating objects
function Motorcycle(brand, model, year, color) {    //constructor function
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;  //properties variables are all public
    this.description = function () {
        return "The motorcycle is a " + this.color + " " + this.year + " " + this.brand + " " + this.model;
    }; //method
}
var motorcycle1 = new Motorcycle("Honda", "CBR", 2015, "red"); //new keyword creates a new object
var motorcycle2 = new Motorcycle("Yamaha", "YZF", 2016, "blue");
console.log(motorcycle1);
console.log(motorcycle1.description());
console.log(motorcycle2);
console.log(motorcycle2.description());

//objects created using Object.create() method
var motorcycle3 = Object.create(motorcycle1);
console.log(motorcycle3);
console.log(motorcycle3.description());

//objects created using the class keyword
class MotorcycleClass {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    description() {
        return "The motorcycle is a " + this.color + " " + this.year + " " + this.brand + " " + this.model;
    }
}
var motorcycle4 = new MotorcycleClass("Honda", "CBR", 2015, "red");
console.log(motorcycle4);
console.log(motorcycle4.description());

//objects created using the factory function
function createMotorcycle(brand, model, year, color) {
    return {
        brand: brand,
        model: model,
        year: year,
        color: color,
        description: function () {
            return "The motorcycle is a " + this.color + " " + this.year + " " + this.brand + " " + this.model;
        }
    };
}
var motorcycle5 = createMotorcycle("Honda", "CBR", 2015, "red");
console.log(motorcycle5);
console.log(motorcycle5.description());

//objects created using the singleton pattern
var motorcycle6 = new function () { //anonymous constructor function
    this.brand = "Honda";
    this.model = "CBR";
    this.year = 2015;
    this.color = "red";
    this.description = function () {
        return "The motorcycle is a " + this.color + " " + this.year + " " + this.brand + " " + this.model;
    };
}
console.log(motorcycle6);
console.log(motorcycle6.description());

//objects created using the prototype property
function MotorcyclePrototype(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
}
MotorcyclePrototype.prototype.description = function () {
    return "The motorcycle is a " + this.color + " " + this.year + " " + this.brand + " " + this.model;
}
var motorcycle7 = new MotorcyclePrototype("Honda", "CBR", 2015, "red");
console.log(motorcycle7);
console.log(motorcycle7.description());

//objects created using the Object.assign() method
var motorcycle8 = Object.assign({}, motorcycle7);
console.log(motorcycle8);
// console.log(motorcycle8.description()); //TypeError: motorcycle8.description is not a function

//objects created using the Object.setPrototypeOf() method
var motorcycle9 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
var motorcycle10 = { brand: "Yamaha", model: "YZF", year: 2016, color: "blue" };
Object.setPrototypeOf(motorcycle10, motorcycle9);
console.log(motorcycle10);
console.log(motorcycle10.brand);
console.log(motorcycle10.model);
console.log(motorcycle10.year);
console.log(motorcycle10.color);

//objects created using the Object.getPrototypeOf() method
var motorcycle11 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
var motorcycle12 = { brand: "Yamaha", model: "YZF", year: 2016, color: "blue" };
Object.setPrototypeOf(motorcycle12, motorcycle11);
console.log(motorcycle12);
console.log(motorcycle12.brand);
console.log(motorcycle12.model);
console.log(motorcycle12.year);
console.log(motorcycle12.color);
console.log(Object.getPrototypeOf(motorcycle12));

//objects created using the Object.keys() method
var motorcycle13 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
console.log(Object.keys(motorcycle13));

//objects created using the Object.values() method
var motorcycle14 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
console.log(Object.values(motorcycle14));

//objects created using the Object.entries() method
var motorcycle15 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
console.log(Object.entries(motorcycle15));

//objects created using the Object.freeze() method
var motorcycle16 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
Object.freeze(motorcycle16);
motorcycle16.color = "blue";
console.log(motorcycle16);

//objects created using the Object.seal() method
var motorcycle17 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
Object.seal(motorcycle17);
motorcycle17.color = "blue";
console.log(motorcycle17);

//objects created using the Object.isFrozen() method
var motorcycle18 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
Object.freeze(motorcycle18);
console.log(Object.isFrozen(motorcycle18));

//objects created using the Object.isSealed() method
var motorcycle19 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
Object.seal(motorcycle19);
console.log(Object.isSealed(motorcycle19));

//objects created using the Object.isExtensible() method
var motorcycle20 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
console.log(Object.isExtensible(motorcycle20));

//objects created using the Object.preventExtensions() method
var motorcycle21 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
Object.preventExtensions(motorcycle21);
console.log(Object.isExtensible(motorcycle21));

//objects created using the Object.getOwnPropertyNames() method
var motorcycle22 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
console.log(Object.getOwnPropertyNames(motorcycle22));

//objects created using the Object.getOwnPropertySymbols() method
var motorcycle23 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
console.log(Object.getOwnPropertySymbols(motorcycle23));

//objects created using the Object.getOwnPropertyDescriptor() method
var motorcycle24 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
console.log(Object.getOwnPropertyDescriptor(motorcycle24, "brand"));

//objects created using the Object.defineProperty() method
var motorcycle25 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
Object.defineProperty(motorcycle25, "brand", { enumerable: false });
console.log(Object.keys(motorcycle25));

//objects created using the Object.defineProperties() method
var motorcycle26 = { brand: "Honda", model: "CBR", year: 2015, color: "red" };
Object.defineProperties(motorcycle26, { brand: { enumerable: false }, model: { enumerable: false } });
console.log(Object.keys(motorcycle26));

