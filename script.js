// Grid of books
const gridLibrary = document.querySelector(".library");

// Button to create a new book
const newBookButton = document.querySelector(".new");

// Reference to full page
const body = document.querySelector("body");

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
  bookPages.textContent = book.pages;
  newBook.appendChild(bookPages);

  // Read Status
  const bookRead = document.createElement("h5");
  bookRead.textContent = book.read;
  newBook.appendChild(bookRead);

  // Add book to library
  gridLibrary.appendChild(newBook);
}

newBookButton.addEventListener("click", function() {
  const bookSetup = document.createElement("div");
  bookSetup.classList.add("bookSetup");

  const setupForm = document.createElement("form");

  const setupTitle = document.createElement("input");
  setupTitle.setAttribute("id","title");
  const setupAuthor = document.createElement("input");
  const setupPages = document.createElement("input");
  const setupRead = document.createElement("input");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title"
  titleLabel.setAttribute("for","title");
  const authorLabel = document.createElement("label");
  const pagesLabel = document.createElement("label");
  const readLabel = document.createElement("label");

  const inputs = [[titleLabel,setupTitle],[authorLabel,setupAuthor],[pagesLabel,setupPages],[readLabel,setupRead]];
  inputs.forEach(function(input) {
    const inputPair = document.createElement("div");
    setupForm.appendChild(inputPair);
    input.forEach(function(item) {  
      inputPair.appendChild(item);
    })    
  });


  bookSetup.appendChild(setupForm);

  body.appendChild(bookSetup);
})

// Add books
addBook(hobbit);
console.log(library);