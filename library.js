const library = document.getElementById("library");

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
    library.innerHTML = ""; 
  
    myLibrary.forEach((book) => {
      // Create a card
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
  
      // Fill with book info
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Status:</strong> ${book.hasRead ? "Read ✅" : "Not read ❌"}</p>
      `;
  
      library.appendChild(bookCard);
    });
  }
  
  displayBooks();



 