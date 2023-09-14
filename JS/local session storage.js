//web application can store data locally within the user's browser. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Local storage is per domain. All pages, from one domain, can store and access the same data. Session storage is per page. Data stored in session storage is deleted when the browser tab is closed.
//before HTML5, application data had to be stored in cookies, included in every server request.
//the way to store the data on the client is to use the local storage object. The data is stored as key/value pairs, and you access it through the local storage object. The following example stores the name "John" in the browser's local storage object, and retrieves it again and writes it into the element with id="result":
//session storage is destroyed once the user closes the browser whereas local storage is persistent and remains stored on the client side until deleted. it stores data untill the browser is closed. The data is never transferred to the server, it can only be read on client's side. it stores data with no expiration date, and gets cleared only through javascript, or clearing the browser cache /locally stored data. 5-10 GB
//both local and session storage have same methods and properties like setItem, getItem, removeItem, clear, key, length key value pairs
//session storage is per tab, local storage is per domain

let key = "name";
localStorage.setItem(key, "John");
let value = localStorage.getItem(key);
console.log(value);
let coursename = "web development";
sessionStorage.setItem("course", coursename);

localStorage.setItem(key, "Rose");
localStorage.removeItem(key);

localStoraage.clear();

//JSON is javascript object notation
//local and session storage can only store strings, so if you want to store objects or arrays, you have to convert them to strings. You can convert a JS object into a JSON string by using the JSON.stringify() method:
let myObj = { name: "John", age: 31, city: "New York" };
let myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

let item = JSON.parse(localStorage.getItem("testJSON"));
console.log(item);  //return as object instead of string