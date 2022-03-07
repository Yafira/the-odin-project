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
		this.pages = form.pages.value + 'pg';
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
