// find the ID container
const container = document.querySelector('#container');

// create new div cand store it in the variable content
const content = document.createElement('div');
content.classList.add('content');
// add class and some text to the content div
content.textContent = 'This is the glorious text-content!';
// append the div to the container
container.appendChild(content);

// create new paragraph under content
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I\'m RED!"
paragraph.style.color = 'red';
content.appendChild(paragraph);

// create a header level 3 under content
const header3 = document.createElement('h3');
header3.textContent = "I\'m a blue h3!";
header3.style.color = 'blue';
content.appendChild(header3);

// create a new div with a black border and pink bg
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'pink';
newDiv.style.borderColor = '3px solid black';

// create new header under new div
const newHeader = document.createElement('h1');
newHeader.textContent = "I'm in a div";
newDiv.appendChild(newHeader);

const newParagraph = document.createElement('p');
newParagraph.textContent = "ME TOO!"
newDiv.appendChild(newParagraph);

// add newDiv under container
container.appendChild(newDiv);

// alert function
 // METHOD 1
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

 // METHOD 2
btn.onclick = alertFunction;


 // METHOD 3
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(e){
    // console.log(e.target);
    e.target.style.background = 'blue';
})