
console.log("Manipulating webpages using JS");

//window is not the object of JS, it's the object of the browser
//browser automatically creates a window object, window is not a part of javascript, it is a part of browser
//we use window object to interact with the browser: open and close it, resize it, print the page, etc
//window object properties are variabls created inside the window object
//window obeject properties
let a = document; //document is the object of the browser, it's the HTML document
a = window.innerWidth;  //innerWidth means the initial rate of your content area
a = innerHeight; //innerHeight means the initial height of your content area JS lready knows a is a window object so we don't need to write window.a
a = location.toString(); //url or IP address of the website
console.log(a);  //your varible is a window object so you don't need to write window.a

//scrollX and scrollY
a = scrollX; //scrollX means how much you have scrolled in the x-axis
a = scrollY; //scrollY means how much you have scrolled in the y-axis
console.log(a);

//google search : full stack web development
//console: scrollY --> 800
//history.go(-1) --> goes back to the previous page


//window object methods: methods are functions inside an object
let b = document;
// window.alert("this is an alert"); //alert is a method of window object
// alert("this is an alert"); //you don't need to write window.alert
// window.prompt("Enter your login Id");
// window.close();
window.confirm("Are you sure you want to delete this page?"); //confirm is a method of window object



