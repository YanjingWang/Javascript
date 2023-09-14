let x = document.querySelector('.container');
console.log(x.childNodes); // returns HTML collection of children
// console.log(x.children); // returns HTML collection of children

let nodeName = x.childNodes[1].nodeName;
console.log(nodeName); // returns DIV

//Node Types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. Document
// 10. docType

let nodeType = x.childNodes[1].nodeType;
console.log(nodeType); // returns 1

let container = document.querySelector('div.container');
console.log(container.children[0].children[0].children); // returns HTML collection of children traversing downwards
console.log(container.firstChild); // returns text node
console.log(container.firstElementChild); // returns first element node

console.log(container.lastChild); // returns text node
console.log(container.lastElementChild); // returns last element node

console.log(container.childElementCount); // returns number of child elements

console.log(container.firstElementChild.parentNode); // returns parent node

console.log(container.firstElementChild.nextSibling); // returns next sibling node


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