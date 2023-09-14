//modify the content of the HTML element by using JS DOM selectors
//find all select the target HTML element
//selecting elements on a page using different methods

//DOM selectors for single elements
//1. document.getElementById() it will return NULL if the element is not found without sepecified Id 
let x = document.getElementById("demo"); //x reresent <h1> element
x.style.color = "red";
x = x.className; //acess classname of <h1> x changed, it represnt classname of <h1>
x = x.innerText = "Hello World"; //change the content of <h1> x
x = x.innerHTML = "<b>Hello World</b>"; //change the content of <h1> x
console.log(x);

let b = document.getElementById("test"); //b represent <p> element
b = b.childNodes;
console.log(b);

//2. document.getElementsByTagName() it will return HTMLCollection if the element is not found without sepecified tag name
let y = document.getElementsByTagName("p"); //y represent <p> element
console.log(y);

//3. document.getElementsByClassName() it will return HTMLCollection if the element is not found without sepecified class name
let z = document.getElementsByClassName("container"); //z represent <div> element
console.log(z);

//DOM selectors for multiple elements
//1. document.querySelectorAll() it will return NodeList if the element is not found without sepecified tag name
let a = document.querySelector("#demo"); //a represent <div> element classname/Id/tagname
a.style.color = "black";
console.log(a);

let c = document.querySelector(".heading1"); //c represent <div> element classname/Id/tagname
c.style.color = "blue";
console.log(c);

let d = document.querySelector("h1"); //c represent <div> element classname/Id/tagname
d.style.color = "yellow";
console.log(d);


//DOM multiple elements selector to select multiple HTML elements with a document
//1. document.querySelectorAll() it will return NodeList if the element is not found without sepecified tag name, the NodeList object represents a collection of nodes, the nodes can be accessed by index numbers, the index starts at 0
let e = document.querySelectorAll("div"); //e represent all elements with same classname/Id/tagname
console.log(e);

//2. document.getElementsByClassName() it will return HTMLCollection if the element is not found without sepecified class name
let f = document.getElementsByClassName("heading1"); //f represent all elements with same classname/Id/tagname
console.log(f);

//3. document.getElementsByTagName() it will return HTMLCollection if the element is not found without sepecified tag name
let g = document.getElementsByTagName("article"); //g represent all elements with same classname/Id/tagname
console.log(g);  //collection of HTML elements, array-like object

for (let index = 0; index < g.length; index++) {
    const element = g[index];
    g[index].style.color = "navy";
    g[index].style.border = "2px solid black";
    console.log(element);
}


/*
document  <DOCTYPE html> --root node

document.documentElement <html>

document.body <body> --parent node

<div> --child node
    <p> --child node
    </p>
</div>
from the above example, <div> is the parent node of <p>, <p> is the child node of <div>, <p> is the sibling node of <p>
from <div> there are previous sibling node and next sibling node, firstchild node and lastchild node
from <p> there are previous sibling node and next sibling node
For HTML DOM, the node tree is:
Document
    Element
        Attribute
        Text
        Comment
        DocumentFragment
        ...
    DocumentType
    ProcessingInstruction
    Comment
    DocumentFragment
    ...
*/
