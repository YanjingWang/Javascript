//promise in javascript is used to handle asynchronous operations. 
//A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.
//The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.
//A promise has three states:
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.
//A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise’s then method are called.
//A promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.
//The then() method takes up to two arguments: callback functions for the success and failure cases of the Promise.
//The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
//The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected).
//The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.
//The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
//The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

console.log("promises tutorial");
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("function 1 is executing");
                resolve();
            }
            else {
                console.log("function 1 is not executing");
                reject("sorry");
            }
        }, 2000);
    })
}
func1().then(function () {
    console.log("thanks for resolving");
}).catch(function (error) {
    console.log("very bad bro, reason: " + error);
})


