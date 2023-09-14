let a = new Date();
console.log(typeof a);
console.log(a);

let b = new Date(2019, 0, 1, 12, 30, 0, 0);
console.log(b);

let c;
c = a.getDay();
c = a.getDate();
c = a.getMonth();
c = a.getFullYear();
c = a.getTime();
c = a.getHours();
c = a.getMinutes();
c = a.getSeconds();
c = a.getMilliseconds();
console.log(c);

let myDate = new Date('2/2/1990');
console.log(myDate);

b = myDate.setDate(15);
b = myDate.setMonth(0);
b = myDate.setFullYear(1990);
b = myDate.setHours(12);
b = myDate.setMinutes(30);
b = myDate.setSeconds(0);
b = myDate.setMilliseconds(0);
console.log(b);