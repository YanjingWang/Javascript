//synchronous programming: top to bottom, one line at a time, one line of code is executed at a time, and each line of code has to wait for the previous line to finish executing.
function func2() {
    console.log("func2 is running");
}
function func1() {
    console.log("func1 is running");
    func2();
    console.log("func1 has ended");
}

func1();

//asynchronous programming: multiple lines of code can be executed at the same time, without waiting for each other to finish.
//callback function: a function that is passed to another function as a parameter, and the callback function is called inside the other function.
//callback function is used to make sure that a function is not going to run before a task is completed but will run right after the task has completed.
//callback function is a function that is passed to another function as a parameter, and the callback function is called inside the other function.
//callback function is used to make sure that a function is not going to run before a task is completed but will run right after the task has completed.

function fun3() {
    setTimeout(function () {
        console.log("func3 is running");
    }, 5000); //5 seconds

}

function fun4() {
    console.log("func4 is running");
    fun3();
    console.log("func4 has ended");
}

fun4();