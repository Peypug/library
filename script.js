// Grid of books
const gridLibrary = document.querySelector(".library");

// Button to create a new book
const newBookButton = document.querySelector(".new");

// Reference to full page
const body = document.querySelector("body");

const bookSetup = document.querySelector(".bookSetup");


// Array of books
library = [];

// Test Object
const hobbit = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: "192",
  read: "not read",
}

// book Constructor
function book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {

  // Add book to array
  this.library.push(book);

  // Create book
  const newBook = document.createElement("div");
  newBook.classList.add("book");

  // Add delete button
  const closeBook = document.createElement("button");
  closeBook.classList.add("close");
  const closeIcon = document.createElement("span")
  closeIcon.classList.add("material-symbols-outlined")
  closeIcon.textContent = "close";
  closeBook.appendChild(closeIcon);
  closeBook.addEventListener("click",function() {
    const parent = closeBook.parentElement;
    parent.style.display = "none";
  })
  newBook.appendChild(closeBook);

  // Title
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;
  newBook.appendChild(bookTitle);

  // Author
  const bookAuthor = document.createElement("h5");
  bookAuthor.textContent = book.author;
  newBook.appendChild(bookAuthor);

  // Page Count
  const bookPages = document.createElement("h5");
  bookPages.textContent = book.pages + " Pages";
  newBook.appendChild(bookPages);

  // Read Status
  const bookRead = document.createElement("h5");
  if (book.read == "on") {
    bookRead.textContent = "Read";
  }
  else {
    bookRead.textContent = "Not Read";
  }
  newBook.appendChild(bookRead);

  // Add book to library
  gridLibrary.appendChild(newBook);
}

newBookButton.addEventListener("click", function() {
  bookSetup.style.display = "flex";
})

// Get data
const form = document.querySelector("form");
form.addEventListener("submit", function () {
  let titleData = document.getElementById("title").value;
  let authorData = document.getElementById("author").value;
  let pagesData = document.getElementById("pages").value;
  let readData = document.getElementById("Read").value;
  let newBook = new book(titleData,authorData,pagesData,readData);
  addBook(newBook);
  bookSetup.style.display = "none";
  let inputsData = document.querySelectorAll("div>input");
  inputsData.forEach(element => {
    element.value = "";
  });
  event.preventDefault();
  
})

// When button with class "close" is clicked delete parent
const closeButtons = document.querySelectorAll(".close")
closeButtons.forEach(closeButton => {
  closeButton.addEventListener("click",function() {
    const parent = closeButton.parentElement;
    parent.style.display = "none";
  })
})
  


// Add books
addBook(hobbit);
console.log(library);