const library = document.getElementById("library");
const newBookBtn = document.getElementById('newBookBtn');
const bookDialog = document.getElementById('bookDialog');
const bookForm = document.getElementById('bookForm');
// const cancelBtn = document.getElementById('cancelBtn');


const myLibrary = [];

function Book(title,author,pages,hasRead){
    this.id= crypto.randomUUID(); // this helps each book to have a unique identifier
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.info= function(){
    return `${this.title} by ${this.author} ${this.pages} pages` + (this.hasRead? "You have read ":"not read yet");
};

const a = new Book("The Hobbit","Tolkein",256, false);
console.log(a.info());




function addBook(title,author,pages,hasRead){
        const newBook = new Book(title, author, pages, hasRead);
        myLibrary.push(newBook);
        
      
};

addBook("The Hobbit", "J.R.R. Tolkien", 295, false);
addBook("Harry Potter", "J.K. Rowling", 400, true);
addBook("Rich Dad Poor Dad", "Robert Kiyosaki", 250, true);

console.log(myLibrary);




function displayBooks() {
    library.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Status</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
  
    const tbody = library.querySelector("tbody");
  
    myLibrary.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.hasRead ? "Read" : "Not read"}</td>
        <td>
        <button class="remove-btn" data-id="${book.id}">Remove</button>
      </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  
  displayBooks();

  newBookBtn.addEventListener('click',() =>{
    bookForm.reset(); //this helps clear old values
    if(typeof bookDialog.showModal === 'function'){
      bookDialog.showModal();
    }
    else{
      bookDialog.style.display = 'block';
    }
document.getElementById('title').focus();
  }
);


bookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form behavior

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const hasRead = document.getElementById("hasRead").checked;

  addBook(title, author, pages, hasRead);


  displayBooks(); //  i called the function coz this updates the table
  bookDialog.close();
});

library.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const bookId = e.target.getAttribute("data-id");
    removeBook(bookId);
  });
});

function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);  
    displayBooks();              
  }
}

Book.prototype.toggleRead = function () {
  this.hasRead = !this.hasRead;
};

library.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const bookId = e.target.getAttribute("data-id");
    toggleReadStatus(bookId);
  });
});

function toggleReadStatus(id) {
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.toggleRead();  
    displayBooks();     
  }
}




