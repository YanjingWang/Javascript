//> cd practice
//> cd ./src
//> node .\module2.mjs
import abc from './module1.mjs';
import xyz from './module1.mjs';
import { a, b, c, d, e } from './module1.mjs';
console.log(xyz); // 1 we export default a in module1.mjs
console.log(abc); // 1 we export default a in module1.mjs
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
