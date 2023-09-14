// document.getElementById("demo").onclick = displayDate;
// document.getElementById("demo").addEventListener("click", displayDate);  displayDate is undefined
document.getElementById("demo").addEventListener("click", function () {
    console.log("You have clicked h1 tag!");
    // alert("Hello World!");
});

// //you can add many event handlers to one element

document.getElementById("demo").addEventListener("click", function (e) {
    let variable;
    variable = e.target;  // e.target is the element that triggered the event, whatever you click on the entire DOM will be selected
    console.log(variable);
});


document.getElementById("containerId").addEventListener("click", function (e) {
    let variable;
    variable = e.target;  // e.target is the element that triggered the event, whatever you click on the entire DOM will be selected
    variable = e.target.id;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.type; // type of event
    variable = e.offsetX; // x coordinate of the element
    variable = e.offsetY; // y coordinate of the element
    console.log(variable);
});