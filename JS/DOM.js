//DOM document object model represent the HTML document as a tree structure of elements, which is displayed in the browser/window
//DOM node: every element, attribute, and piece of text in the HTML doc is a DOM node
//The DOM is a programming interface for HTML and XML documents
//It defines the logical structure of documents and the way a document is accessed and manipulated

//object have properties and methods to access, create, and change HTML elements
//2.HTML gets loaded into window becomes your document object
//3.hierarchy of objects: window > document > html > body > h1    
//4.control elements: radio, checkbox, button, text, etc
console.log("DOM");
let a = window.document;
a = document.all;
a = document.body;
a = document.documentElement;
a = document.head
a = document.anchors; //it will return all the anchor tags with the name attribute
a = document.forms;
a = document.links;
a = document.URL;
a = document.title;
a = document.scripts;
console.log(a);

