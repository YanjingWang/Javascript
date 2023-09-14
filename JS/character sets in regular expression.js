let regex = /harry/;

//[] -> character set
regex = /h[a-z]rry/; //can be any character from a to z
regex = /h[aty]rry/; //can be an a, t or y
regex = /h[^aty]rry/; //cannot be an a, t or y
regex = /h[^aty]rr[yYu]/; //cannot be an a, t or y + can be y or Y or u
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; //we can have as many character sets as we want
regex = /h[^a-zA-Z]rr[yu0-9][0-9]/; //we can have as many character sets as we want

//Quantifiers
regex = /har{2}y/; //r can occur exactly 2 times
regex = /har{0,2}y/; //r can occur exactly 0 to 2 (0 or 1 or 2) times

//Groupings
regex = /(har){2}([0-9]r){3}/;

//Shorthand Character Classes
regex = /\war/; //word character - _ or alphabet or numbers
regex = /\w+ar/; // \w+ means one or more word characters
regex = /\Wbhai/; // Non word character
regex = /\W+bhai/; // \W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/; // \d+ means more than one digit
regex = /\D999/; // \D means non digit
regex = /\D+999/; // \D+ means more than one non digit character
regex = /\ska number/; // Match whitespace character
regex = /\s+ka number/; // Match one or more whitespace character
regex = /\Ska number/; // Match non whitespace character
regex = /\S+ka number/; // Match one or more non whitespace character
regex = /ka\b/; // word boundary

//Assertions
regex = /h(?=y)/; // h ke baad y hai to match karo
regex = /h(?!y)/; // h ke baad y nahi hai to match karo


regex = /h[a-z]rry/; //[] using this we can get any character from a to z
let txt = "harry is a nice boy with hbrry and hirry";

let result = regex.exec(txt);
console.log("The result from exec is ", result);

if (regex.test(txt)) {
    console.log(`The string ${txt} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${txt} does not match the expression ${regex.source}`);
}
