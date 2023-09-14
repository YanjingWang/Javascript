//iterators is an object are used to iterate over the elements of an array or an object or a string or a map or a set or a generator function or a DOM collection or a typed array  
//basic syntax of iterators
//next() method returns an object with two properties: value and done
//value: is the current element in the array(sequence)
//done: is a boolean value which returns false if the iterator is not finished
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myIterator = arr[Symbol.iterator]();
console.log(myIterator.next());

/* next() method returns an object with two properties: value and done
value : property returns the value of the current element
done : boolen value property returns false if the iterator is not finished */

function myIteratorFunction() {
    let i = 0;
    return {
        next: function () {
            if (i < 10) {
                i++;
                return {

                    done: false, value: i
                }
            }
            else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
myIteratorFunction();
// function myIteratorFunction() {
//     let i = 0;
//     return {
//         next: function () {
//             return {
//                 value: i++,
//                 done: false
//             }
//         }
//     }
// }
// myIteratorFunction();