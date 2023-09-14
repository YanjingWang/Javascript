//the JS interaction with HTML is through events
//when user clicks on the button, the event is triggered
//event is part of the DOM, it is an object and every event has its own properties
//every HTML element has its own events that can trigger JS code

//previous submit button we have not set a target for the form, we have to mention which form we are submitting to a backend file like PHP file or Node.js file
//<form action="backend.php" method="POST">
//single click 
let btn = document.getElementById("btn");
btn.addEventListener("click", firstfunction);

function firstfunction(e) {
    console.log("Submit Button clicked", e);
    e.preventDefault(); //this will prevent the default behaviour of the submit button
}

//when you click submit button, it's trying to submit your form data to a backend file
//when you click on the button, it will trigger the event and the event will be passed to the function
//double click
btn.addEventListener("dblclick", secondfunction);

function secondfunction(e) {
    console.log("Submit Button double clicked", e);
    e.preventDefault();
}

//when you double click on the button, it will trigger the event and the event will be passed to the function

//mouse move event
// document.querySelector(".container").addEventListener("mousemove", function (e) {
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
//     console.log("Mouse moved");
// }
// );
btn.addEventListener("mousemove", thirdfunction);
function thirdfunction(e) {
    console.log("Mouse moved", e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
}

//mouseover event
btn.addEventListener("mouseover", fourthfunction);
function fourthfunction(e) {
    console.log("Mouse over", e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
}

//mouseout event
btn.addEventListener("mouseout", fifthfunction);
function fifthfunction(e) {
    console.log("Mouse out", e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
}

//mouseenter event
btn.addEventListener("mouseenter", sixthfunction);
function sixthfunction(e) {
    console.log("Mouse enter", e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
}

//mouseup event
btn.addEventListener("mouseup", seventhfunction);
function seventhfunction(e) {
    console.log("Mouse up", e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
}

//mousedown event
btn.addEventListener("mousedown", eighthfunction);
function eighthfunction(e) {
    console.log("Mouse down", e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
}