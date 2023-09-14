//AJAX - Asynchrounous JavaScript and XML
//AJAX is a technique for accessing web servers from a web page asynchronously.
//AJAX is a combination of: a browser built-in XMLHttpRequest object (to request data from a web server), JavaScript and HTML DOM (to display or use the data).  
//AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
//AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

//basic syntax when sending a request with AJAX to a server:
// var request = new XMLHttpRequest(); //create an XMLHttpRequest object
// request.open('GET', 'https://jsonplaceholder.typicode.com/users'); //specify the type of request and the URL
// request.send(); //send the request to the server

let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
    request.onload = function () {
        if (request.status == 200) {
            console.log(request.response);
            let data = JSON.parse(request.response);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].name);
            }
        } else {
            console.log(`error ${request.status} ${request.statusText}`);
        }
    }
}
);


