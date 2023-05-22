// Grid of books
const gridLibrary = document.querySelector(".library");

// Button to create a new book
const newBookButton = document.querySelector(".new");

// Reference to full page
const body = document.querySelector("body");

const bookSetup = document.querySelector(".bookSetup");


// Array of books
library = [];


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
  bookAuthor.textContent = "By " + book.author;
  newBook.appendChild(bookAuthor);

  // Page Count
  const bookPages = document.createElement("h5");
  bookPages.textContent = book.pages + " Pages";
  newBook.appendChild(bookPages);

  // Read Status
  const readStatus = document.createElement("div");
  readStatus.classList.add("read-status");
  const bookRead = document.createElement("h5");
  readStatus.appendChild(bookRead);
  bookRead.classList.add("read-label");
  if (book.read == "on") {
    bookRead.textContent = "Read";
  }
  else {
    bookRead.textContent = "Not Read";
  }
  const statusChange = document.createElement("button");
  statusChange.classList.add("status-change");
  const changeIcon = document.createElement("span");
  changeIcon.classList.add("material-symbols-outlined");
  changeIcon.textContent = "change_circle"
  readStatus.appendChild(statusChange);
  statusChange.append(changeIcon);

  statusChange.addEventListener("click", function(){
    const readLabel = statusChange.previousElementSibling;
    if (readLabel.textContent == "Read") {
      readLabel.textContent = "Not Read";
    }
    else if (readLabel.textContent == "Not Read") {
      readLabel.textContent = "Read";
    }
  })

  newBook.appendChild(readStatus);

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

// Button to change read status
const statusChangeButtons = document.querySelectorAll(".status-change");
statusChangeButtons.forEach(statusChangeButton => {
  statusChangeButton.addEventListener("click", function(){
    const readLabel = statusChangeButton.previousElementSibling;
    if (readLabel.textContent == "Read") {
      readLabel.textContent = "Not Read";
    }
    else if (readLabel.textContent == "Not Read") {
      readLabel.textContent = "Read";
    }
  })
})

