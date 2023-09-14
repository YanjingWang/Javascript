//callback function is a function that is passed to another function as a parameter, and the callback function is called inside the other function.
//callback function is used to make sure that a function is not going to run before a task is completed but will run right after the task has completed.
//function can take other function as a argument and can return function as well, it's called higher order function.
console.log("callback function  tutorial");

function func1() {
    console.log("function 1 is executing");
}

function func2() {
    console.log("function 2 is executing");
}

func1();
func2();

// function msg(str){
//     setTimeout(() => {
//         console.log(str);
//     },timeout);
// }

function msg(str) {
    setTimeout(function () {
        console.log("this is how callbackfunction works, this message is shown after 5 seconds");
    }, 5000);
}
msg()