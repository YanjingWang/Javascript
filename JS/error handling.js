//Different kinds of errors in javascript
//1.syntax error -> when you write wrong syntax in your javascript code
//2.runtime error -> when you write correct syntax in your javascript code but you write wrong logic in your javascript code eg.the function is not defined
//3.logical error -> you get wrong output eg.variable or parameter is of not valid type
//4.network error -> you are not connected to the internet
//5.reference error -> invlid reference  eg.you are not authorized to access this page
//6.eval error -> error in global function

//5.server error -> when you write correct syntax in your javascript code and you write correct logic in your javascript code and you get correct output and you are connected to the internet but you get error from the server eg.you are not authorized to access this page
//6.database error -> when you write correct syntax in your javascript code and you write correct logic in your javascript code and you get correct output and you are connected to the internet and you are authorized to access this page but you get error from the database eg.you are not authorized to access this database
//7.testing error -> when you write correct syntax in your javascript code and you write correct logic in your javascript code and you get correct output and you are connected to the internet and you are authorized to access this page and you are authorized to access this database but you get error from the testing eg.you are not authorized to access this testing
//8.deployment error -> when you write correct syntax in your javascript code and you write correct logic in your javascript code and you get correct output and you are connected to the internet and you are authorized to access this page and you are authorized to access this database and you are authorized to access this testing but you get error from the deployment eg.you are not authorized to access this deployment
//9.production error -> when you write correct syntax in your javascript code and you write correct logic in your javascript code and you get correct output and you are connected to the internet and you are authorized to access this page and you are authorized to access this database and you are authorized to access this testing and you are authorized to access this deployment but you get error from the production eg.you are not authorized to access this production

//basic syntax of try catch
// try {
//     //write your code here
// } catch (error) {
//     //write your code here
// }

//basic syntax of throw and finally keywords
// try {
//     //write your code here
//     throw "this is an error";
// } catch (error) {
//     //write your code here
//     console.log(error);
// } finally {
//     //write your code here
//     console.log("finally block executed");
// }
let x = "error handling in JS is very easy";
x = undefined;
if (x != undefined) {
    throw new Error("this is not undefined");
}
else {
    console.log("this is undefined");
}

try {
    console.log("we are inside try block");
    functionHarry();
}
catch (error) {
    console.log("are you okay?");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

finally {
    console.log("finally we will run this");
}