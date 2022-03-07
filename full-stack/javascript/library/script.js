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
