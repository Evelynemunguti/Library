const library = document.getElementById("library");

const myLibrary = [];

function Book(title,author,pages,hasRead){
    this.id= crypto.randomUUID; // this helpe each book to have a unique identifier
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasread = hasRead;
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



 