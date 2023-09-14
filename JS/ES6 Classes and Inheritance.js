// class SimpleDate{
//     constructor(year, month, day){
//         this.year = year;
//         this.month = month;
//         this.day = day;
//     }//initialize an instance to a valid date
//     addDays(nDays){
//         this.day += nDays;
//         while(this.day > this.daysInMonth()){
//             this.day -= this.daysInMonth();
//             this.month++;
//             if(this.month > 12){
//                 this.month = 1;
//                 this.year++;
//             }
//         }
//     }//add n days to the date
//     getDays(){
//         return this.day;
//     }//return the day of the month
// }  

class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getAge() {
        return new Date().getFullYear() - this.year;
    }
    carInfo() {
        return `${this.make} ${this.model} released in ${this.year}`;
    }
}
class Bike extends car {
    constructor(make, model, year, speed) {
        super(make, model, year);
        this.speed = speed;
    }
    bikeInfo() {
        return `${this.make} ${this.model} released in ${this.year} with ${this.speed} speed`;
    }
}

let myCar = new car("Toyota", "Corolla", "2015");
console.log(myCar.getAge());

let myBike = new Bike("Kawasaki", "Ninja", "2020", "300");
console.log(myBike.bikeInfo());

//call()