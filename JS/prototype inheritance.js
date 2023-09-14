const myInfo = { //object literal
    isMale: true,
    name: "John",
    age: 30,
    location: "USA",
    getBio: function () {
        return `${this.name} is ${this.age} years old and lives in ${this.location} Am I male? ${this.isMale}`;
    }
}

let myInfo2 = Object.create(myInfo); //create a new object from myInfo object
myInfo2.name = "Mary";
myInfo2.age = 25;
myInfo2.location = "Canada";
myInfo2.isMale = false;
myInfo2.getBio();