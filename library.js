
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


 