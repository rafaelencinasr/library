let myLibrary = [];
let i = 0;
const addButton = document.querySelector("#addButton");
const container = document.querySelector('.bookContainer');
const createBook = document.querySelector('#createBook');
const closeForm = document.querySelector('#closeForm');


function Book(){
    this.title  = document.getElementById('bookTitle').value;
    this.author = document.getElementById('bookAuthor').value;
    this.pages  = document.getElementById('numPages').value;
    this.read   = document.getElementById('readStatus').checked;
}

Book.prototype.createCard = function(){
    let div = document.createElement('div');
    div.classList.add('book');

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    bookTitle.textContent = `Title: ${this.title}`;

    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = `Author: ${this.author}`;

    let bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    bookPages.textContent = `No. of pages: ${this.pages}`;

    let readStatus = document.createElement('div');
    readStatus.classList.add('readStatus');
    if(this.read){
        readStatus.textContent='Read';
    }
    else {
        readStatus.textContent='Unread';
    }


    let deleteBookIcon = document.createElement('button')
    deleteBookIcon.classList.add('deleteBook');
    let trashIcon = document.createElement('img');
    trashIcon.src= './img/delete.png';

    deleteBookIcon.appendChild(trashIcon);

    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(bookPages);
    div.appendChild(readStatus);
    div.appendChild(deleteBookIcon);
    container.appendChild(div);

}

/* Book.prototype.deleteBook = function(){
    console.log(this.title);
    let searchIndex = myLibrary.findIndex((book)=>book.title==this.title);
    console.log(searchIndex);
}  */

createBook.addEventListener('click', ()=>{
    myLibrary[i] = new Book();
    console.log(myLibrary[i].title);
    myLibrary[i].createCard();
    i = i+1;
    

    deleteBookButton.forEach(button=>button.removeEventListener('click', testDeleteButton));
    deleteBookButton = document.querySelectorAll('.deleteBook');
    deleteBookButton.forEach(button=>button.addEventListener('click', testDeleteButton));
    document.getElementById("popupForm").style.display='none';
});

function testDeleteButton(){
    console.log("Del button");
};

let deleteBookButton = document.querySelectorAll('.deleteBook');
deleteBookButton.forEach(button=>button.addEventListener('click', testDeleteButton));

addButton.addEventListener('click',()=>{
    clearForm();
    document.getElementById('popupForm').style.display="flex";
    document.getElementById('popupForm').style.visibility="visible";
    document.getElementById('popupForm').style.height="100%";
});

closeForm.addEventListener('click',()=>{
    document.getElementById("popupForm").style.display='none';
    document.getElementById('popupForm').style.visibility="hidden";
});

function clearForm(){
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('numPages').value = '';
    document.getElementById('readStatus').checked;
}

