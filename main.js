//EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//document.all[13].textContent = "Hello World";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.links[1]);

//GetElementById//

//console.log(document.getElementById('brand'));
//const brandName = document.getElementById('brand-name');
//const brandHeader = document.getElementById('brand-header');
//console.log(brandName);
//brandName.textContent = "Hello World";
//brandName.innerText = "Goodbye";
//brandName.innerHTML = "<h3>Hello</h3>";
//brandHeader.style.borderBottom = "3px solid red";

//GetElementsByClassName//

//const boxes = document.getElementsByClassName('box');
//console.log(boxes);
//console.log(boxes[1]);
//boxes[1].textContent = "hello";
//boxes[1].style.backgroundColor = "#999";
/*for (i = 0; i < boxes.length; i++) {
	boxes[i].style.backgroundColor = "#999";
}*/

//getElementsByTagName//

//const divs = document.getElementsByTagName('div');
//console.log(divs);
//console.log(divs[1]);

/*for (let i = 5; i < divs.length; i++) {
	divs[i].style.backgroundColor = "#999";
}*/

//querySelector//

/* const header = document.querySelector('#brand-header');
console.log(header);
header.style.borderBottom = '3px solid black';

const input = document.querySelector('input');
input.value = "hello";

const pass = document.querySelector('input[type="password"]');
pass.value = "send";

const submit = document.querySelector('button');
console.log(submit);
submit.value = "send"; */

//querySelectorAll//

//refer to dom.js

//TRAVERSING THE DOM

//parentNode
/* const signUpMain = document.querySelectorAll('.container');
console.log(signUpMain[2].parentNode);
signUpMain[2].parentNode.style.backgroundColor = "green"; */

//parentElement
/* const signUpMain = document.querySelectorAll('.container');
console.log(signUpMain[2].parentElement);
signUpMain[2].parentElement.style.backgroundColor = "green"; */

//childNodes
/* const signUpMain = document.querySelectorAll('.container');
console.log(signUpMain[1].childNodes); //not recommended due to containing "text" items
console.log(signUpMain[1].children);

//firstChild and firstElementChild
console.log(signUpMain[1].firstChild); //useless
console.log(signUpMain[1].firstElementChild);

//lastChild and lastElementChild
console.log(signUpMain[1].lastChild); //also useless
console.log(signUpMain[1].lastElementChild); */

//nextSibling and nextElementSibling
/* const brandHeader = document.querySelector('#brand-header');
console.log(brandHeader.nextSibling); //also useless
console.log(brandHeader.nextElementSibling); */

//previousSibling and previousElementSibling
/* const showcaseArea = document.querySelector('#showcase');
console.log(showcaseArea.previousSibling);
console.log(showcaseArea.previousElementSibling); */

//CreateElement

/* const newDiv = document.createElement('div');

//add class/id/attribute

newDiv.className = "new-div";
newDiv.id = "new-div-1";
newDiv.setAttribute('title', 'title-div');

//CreateTextNode

const newDivText = document.createTextNode('Hello World');

//Add text to div

newDiv.appendChild(newDivText);

//ADD TO DOM

const brandContainer = document.querySelector('#brand-header .container');
const brandName = document.querySelector('#brand');

brandContainer.insertBefore(newDiv, brandName); */

//Event Listeners

/*

const button = document.getElementById('button1').addEventListener('click', function(){
	console.log('submit form');
});

*/

const button = document.getElementById('button1').addEventListener('click', clickFunction);

function clickFunction(event){
	//console.log('button clicked');
	//document.getElementById('boxes').style.backgroundColor = "#999";
	//document.querySelector('#boxes').style.backgroundColor = "#999";

	//console.log(event);
	//console.log(event.target);
	//console.log(event.target.id);

	//console.log(event.type);
	//console.log(event.clientX);
	//console.log(event.clientY); - position from window

	//console.log(event.offsetX);
	//console.log(event.offsetY); - position from element

	//console.log(event.shiftKey);
	//console.log(event.altKey);
	//console.log(event.ctrlKey); - check to see if a button is being held, returns true/false

};







