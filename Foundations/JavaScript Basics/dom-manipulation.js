// find the ID container
const container = document.querySelector('#container');

// create new div cand store it in the variable content
const content = document.createElement('div');
content.classList.add('content');
// add class and some text to the content div
content.textContent = 'This is the glorious text-content!';
// append the div to the container
container.appendChild(content);
