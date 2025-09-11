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

 

// newBookBtn.addEventListener('click', () => {
//   bookForm.reset();                 // clear old values
//   if (typeof bookDialog.showModal === 'function') {
//     bookDialog.showModal();         // show modal (preferred)
//   } else {
//     bookDialog.style.display = 'block'; // fallback for old browsers
//   }
//   document.getElementById('title').focus();
// });