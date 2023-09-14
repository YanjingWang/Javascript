var elem = document.createElement('a');  //anchor tag is used to create an external link
elem.className = 'jsClass';
elem.id = 'jsId';
elem.setAttribute('href', 'https://chat.openai.com/');
elem.setAttribute('target', '_blank');
elem.innerText = 'Go to ChatGPT';
elem.innerHTML = '<b>Go to ChatGPT</b>';
let div = document.querySelector('div.container');
div.appendChild(elem);
console.log(elem);

//get and set attributes
let elem2 = document.createElement('a');
elem2.className = 'jsClass2';
elem2.id = 'myAchor';
elem2.setAttribute('href', 'https://bard.google.com/');
elem2.setAttribute('target', '_blank');
elem2.innerText = 'Go to Bard';
elem2.innerHTML = '<b>Go to Bard</b>';
let div2 = document.querySelector('div.container');
div2.appendChild(elem2);

//getAttribute
var h = document.getElementById('myAchor').getAttribute('href');
console.log(h);

//hasAttribute
var h2 = document.getElementById('myAchor').hasAttribute('href');
console.log(h2);

//removeAttribute
var h3 = document.getElementById('myAchor').removeAttribute('href');
console.log(h3);

//replaceWith
// var h4 = document.getElementById('myAchor').replaceWith(elem2);
let elem1 = document.getElementById('myAchor');
let elem3 = document.createElement('div');
let content = document.createTextNode('Content added using only JS');
elem3.appendChild(content);
elem1.replaceWith(elem3);

//removeChild
let list = document.getElementById('myUL');
if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
}

