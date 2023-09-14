//Fetch API is a promise-based API which returns a response object. The response object consists of the information like status, status-text, headers, and most importantly the response body. Similar to XMLHttpRequest, fetch also allows us to make network requests. The main difference between them is that the Fetch API uses Promises, hence avoiding callback hell and providing a better API. The Fetch API is a modern replacement for XMLHttpRequest. 
//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. 
//basic syntax of fetch api
// fetch(url, { options })
// .then(function(response) {
//     // handle HTTP response
//   })
//   .catch(function(error) {
//     // handle network error
//   });
// //fetch api example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err));
// //fetch api example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.text())
// .then(text => console.log(text))
// .catch(err => console.log(err));
// //fetch api example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.blob())
// .then(blob => console.log(blob))
// .catch(err => console.log(err));
// //fetch api example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.arrayBuffer())
// .then(arrayBuffer => console.log(arrayBuffer))
// .catch(err => console.log(err));
// //fetch api example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.formData())
// .then(formData => console.log(formData))
// .catch(err => console.log(err));
// //fetch api example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err));
//get API from dummy api example: dummy.restapiexample.com/api/v1/employees
// fetch('https://dummy.restapiexample.com/api/v1/employees').then(res => {
//     console.log(res);
//     return res.json();
// })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//get API from dummy api example: dummy.restapiexample.com/api/v1/employees to show data in html page using innerHTML property of document object model (DOM) 
//Fetch API to use GET to do aschyncronous request, there will be no waiting time for the response, the code will continue to execute while the request is being made, and when the response is ready, the code will execute the callback function.
//http://api.github.com/orgs/nodejs
// function getdata() {
//     fetch('http://api.github.com/orgs/nodejs').then(response => {
//         // console.log(response);
//         return response.json();
//     })  //fetch api returns a promise, so we can use then method to get the response
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }
// getdata();

// function getdata() {
//     url = 'getdata.txt';
//     fetch(url).then(response => {
//         // console.log(response);
//         return response.text();
//     })  //fetch api returns a promise, so we can use then method to get the response
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }
// getdata();

//POST send data to server and create a new resource get response from server
function postdata() {
    url = 'https://dummy.restapiexample.com/api/v1/create';
    data = '{"name":"test","salary":"123","age":"23"}';
    params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => {
        return response.json();
    })
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
postdata();

// let data = {
//     first_name: "John",
//     last_name: "Doee",
//     job_title: "Software Engineer",

// }
// const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
// fetch('https://reqres.in/api/users', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
