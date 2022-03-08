// create new book
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

// add new book to page
const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => (popUpForm.style.display = 'block'));

// close popup
const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => (popUpForm.style.display = 'none'));

// book constructor
class Book {
	constructor(title, author, pages, read) {
		this.title = form.title.value;
		this.author = form.author.value;
		this.pages = form.pages.value;
		this.read = form.read.checked;
	}
}

// creates book from constructor
let myLibrary = [];
let newBook;

// adds book to library
function addBookToLibrary(e) {
	e.preventDefault();
	popUpForm.style.display = 'none';

	newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	setData(); //saves update in local storage
	render();
	form.reset();
}

// creates book visual in browser
function render() {
	const display = document.getElementById('lib-container');
	const books = document.querySelectorAll('.book');
	books.forEach((book) => display.removeChild(book));

	for (let i = 0; i < myLibrary.length; i++) {
		createBook(myLibrary[i]);
	}
}

// book DOM elements, to be used in render();
function createBook(item) {
	const library = document.querySelector('#lib-container');
	const bookDiv = document.createElement('div');
	const titleDiv = document.createElement('div');
	const authorDiv = document.createElement('div');
	const pageDiv = document.createElement('div');
	const removeBtn = document.createElement('button');
	const readBtn = document.createElement('button');

	// book details
	bookDiv.classList.add('book');
	bookDiv.setAttribute('id', myLibrary.indexOf(item));
	// title
	titleDiv.textContent = item.title;
	titleDiv.classList.add('title');
	bookDiv.appendChild(titleDiv);
	// author
	authorDiv.textContent = item.author;
	authorDiv.classList.add('author');
	bookDiv.appendChild(authorDiv);
	// pages read
	pageDiv.textContent = item.pages;
	pageDiv.classList.add('pages');
	bookDiv.appendChild(pageDiv);
	// read btn
	readBtn.classList.add('readBtn');
	bookDiv.appendChild(readBtn);
	// read btn functionality
	if (item.read === false) {
		readBtn.textContent = 'Not Read';
	} else {
		readBtn.textContent = 'Read';
	}
	// remove book
	removeBtn.textContent = 'Remove';
	removeBtn.setAttribute('id', 'removeBtn');
	bookDiv.appendChild(removeBtn);

	library.appendChild(bookDiv);
	// remove book button
	removeBtn.addEventListener('click', () => {
		myLibrary.splice(myLibrary.indexOf(item), 1);
		setData();
		render();
	});

	// toggle ability to each book 'read' button on click
	readBtn.addEventListener('click', () => {
		item.read = !item.read;
		setData();
		render();
	});
}

// library gets stored in local storage
function setData() {
	localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

// retrieves books from local storage when page is refreshed
function restore() {
	if (!localStorage.myLibrary) {
		render();
	} else {
		let objects = localStorage.getItem('myLibrary');
		objects = JSON.parse(objects);
		myLibrary = objects;
		render();
	}
}

restore();
