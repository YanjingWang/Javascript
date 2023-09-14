//matachatracter in regular expression
//basic syntax of regular expression
let regex = /harry/;
regex = /^harr/; //^ means expression will match if string starts with
regex = /harry$/; //$ means expression will match if string ends with
regex = /h.rry/; //. means expression will match if any one character is present in place of .
regex = /h*rry/; //* means expression will match if 0 or more character is present in place of *
regex = /ha?rryi?t/; //? means expression will match if 0 or 1 character is present in place of ?
regex = /h\*rry/; //\ means expression will match if * is present in place of \

let txt = "harry is a nice boy with harry's father's face";
let output = regex.exec(txt);
console.log("This output is: ", output);

if (regex.test(txt)) {
    console.log(`The string ${txt} matches with the expression ${regex.source}`);
}
else {
    console.log(`The string ${txt} does not match with the expression 
    ${regex.source}`);
}