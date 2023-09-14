//regular exssions in javascript: regular expressions are used to perform pattern matching and pattern searching
//regular expressions are used to find certain words or patterns inside strings
//regular expressions are used to replace certain words or patterns inside strings
//regular expressions are used to validate data
//regular expressions are used to split strings
//regular expressions are used to extract data
//regular expressions are used to parse data
//regular expressions are used to syntax highlightning
//regular expressions are used to web scraping
//regular expressions are used to web crawling
//regular expressions are used to lexical analysis

//syntax of regular expressions
let reg = /harry/; //this is a regular expression literal in js
reg = /harry/g; //g means global
reg = /harry/i; //i means case insensitive
reg = /harry/m; //m means multiline
reg = /harry/ig; //multiple flags
console.log(reg);
console.log(reg.source);

//1.exec() -> this function will return an array for match or null for no match
let txt = "this is great code with harry and also harry bhai";
let result = reg.exec(txt);
console.log(result);
if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}
//2.test() -> returns true or false
let result2 = reg.test(txt);
console.log('result2: ' + result2);

//3.match() -> it will return an array of results or null
let result3 = txt.match(reg);
console.log(result3);

//4.search() -> returns index of first match else -1
let result4 = txt.search(reg);
console.log(result4);

//5.replace() -> returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
let result5 = txt.replace(reg, 'SHUBHAM');
// let result6 = reg.replace(reg, 'SHUBHAM'); //wrong syntax
console.log(result5);

