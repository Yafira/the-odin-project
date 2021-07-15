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

// create a header size 3 under content
const header3 = document.createElement('h3');
header3.textContent = "I\'m a blue h3!";
header3.style.color = 'blue';
content.appendChild(header3);


