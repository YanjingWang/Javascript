//deconstructing makes it easy to pull out data from arrays and objects into distinct variables
//deconstructinhg abstracts away the details of how the data is extracted from the object or array 
//deconstructing is a way to unpack values from arrays or properties from objects into distinct variables 

const person = { first: 'Wes', last: 'Bos', country: 'Canada', city: 'Hamilton', twitter: '@wesbos' }; //object
const { first, last } = person; //deconstructing
console.log(first); //Wes
console.log(last); //Bos


// const first = person.first; //old way
// const last = person.last; //old way

var colors = ['red', 'green', 'blue', 'yellow', 'purple']; //array
var [firstColor, secondColor, ...lastColor] = colors; //deconstructing
console.log(firstColor); //red
console.log(secondColor); //green
console.log(lastColor); //blue,yellow,purple