//asynchronous await is used to make asynchronous code look like synchronous code
//asunchronous await function give us the ability to write asynchronous code in a synchronous manner without complex code
//basic syntax of asynchronous await function: async await with fetch api
// async function func1() {
//     console.log("inside function 1");
//     const response = await fetch('https://api.github.com/users');
//     console.log("before response");
//     const users = await response.json();
//     console.log("users resolved");
//     return users;
// }
// console.log("before calling function 1");
// let a = func1();
// console.log("after calling function 1");
// console.log(a);
// a.then(data => console.log(data));
// console.log("last line of this js file");
/* examples */
// async function name(params) {

// }
// async function fun() {
//     console.log("Async /Await tutorial");
//     return Promise.resolve(1);
// }

// fun().then(function (res) {
//     console.log(res)
// });

//basic syntax of asynchronous await function: async await with fetch api
// let result = await Promise;
async function func1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done with Async /Await function"), 1000)
    }
    );
    let result = await promise;
    console.log(result);
}
func1();
