let myLibrary = [];
let myLibraryTest = [];
let i = 0;
let bookIdNum = 0;
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

/* const testObject0 = {
    title: 'Title: "Harry Potter"',
    author: 'Author: JK Simmons',
    pages: 'Pages: 279',
    read: 'Read',
}

const testObject1 = {
    title: 'Title: "Test book2"',
    author: 'Author: Testus Authorus',
    pages: 'Pages: 123',
    read: 'Unread',
}

myLibraryTest[0] = testObject0;
myLibraryTest[1] = testObject1;
 */
Book.prototype.createCard = function(){

    let parentContainer = document.querySelector('.bookContainer');

    // Create the book container
    let div = document.createElement('div');
    div.classList.add('book');
    div.dataset.bookId = bookIdNum;
    
    // Create book title element
    let bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    bookTitle.textContent = `Title: ${this.title}`;

    // Create book author element
    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = `Author: ${this.author}`;

    // Create number of pages element
    let bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    if(this.pages>999999999999999999999999999999){
        bookPages.textContent = `No. of pages: 999999999999999999999999999999`;
    }
    else{
        bookPages.textContent = `No. of pages: ${this.pages}`;
    }
    

    // Checks if book was read or not, assign text content accordingly 
    let readStatus = document.createElement('div');
    readStatus.classList.add('readStatus');
    if(this.read){
        readStatus.textContent='Read';
    }
    else {
        readStatus.textContent='Unread';
    }

    // Creates a button that lets user change read status
    let readStatusButton = document.createElement('button');
    readStatusButton.classList.add('readStatusButton');
    readStatusButton.textContent='Change status';
    readStatusButton.addEventListener('click', ()=>{
        this.read = !this.read;
        if(this.read){
            readStatus.textContent='Read';
        }
        else {
            readStatus.textContent='Unread';
        }
    });

    // Delete button creation
    let deleteBookIcon = document.createElement('button')
    deleteBookIcon.classList.add('deleteBook');
    deleteBookIcon.dataset.bookId = bookIdNum;
    // Adding event listener individually each time a new book is created
    deleteBookIcon.addEventListener('click',()=>{
        //Search for an object in the myLibrary array that matches the book title and get the index
        let delIndex = myLibrary.findIndex((book)=>book.title==this.title);
        //Delete the object at the found index
        myLibrary.slice(delIndex,1);
        //Delete element from the DOM
        parentContainer.removeChild(div);
    });

    // Creates the trash icon from the URL
    let trashIcon = document.createElement('img');
    trashIcon.src= './img/delete.png';

    // Changes book ID for next book attr.
    bookIdNum++;
    deleteBookIcon.appendChild(trashIcon);

    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(bookPages);
    div.appendChild(readStatus);
    div.appendChild(readStatusButton);
    div.appendChild(deleteBookIcon);
    container.appendChild(div);

}

/* Book.prototype.deleteBook = function(){
    console.log(this.title);
    let searchIndex = myLibrary.findIndex((book)=>book.title==this.title);
    console.log(searchIndex);
}  */

/* Book.prototype.createDeleteBtnListener = function(){
    let  
}
 */
let emptyFlag = true;

createBook.addEventListener('click', ()=>{
    if(document.getElementById('bookTitle').value && document.getElementById('bookAuthor').value && document.getElementById('numPages').value){
        emptyFlag = false;
        console.log("We have a title")
        myLibrary[i] = new Book();
        console.log(myLibrary[i].title);
        myLibrary[i].createCard();
        // myLibrary[i].createDeleteBtnListener
        i++;
        document.getElementById("popupForm").style.display='none';
    }
    else{
        emptyFlag = true;
        console.log('SOmething left empty :(')
        alert("Please fill all the information or close the form");
    }
/*     myLibrary[i] = new Book();
    console.log(myLibrary[i].title);
    myLibrary[i].createCard();
    // myLibrary[i].createDeleteBtnListener
    i++;
     */

/*     deleteBookButton.forEach(button=>button.removeEventListener('click', testDeleteButton));
    deleteBookButton = document.querySelectorAll('.deleteBook');
    deleteBookButton.forEach(button=>button.addEventListener('click', testDeleteButton)); */
    
});

 function testDeleteButton(){
    console.log("Del button");
}; 

/* let deleteBookButton = document.querySelectorAll('.deleteBook');
deleteBookButton.forEach(button=>button.addEventListener('click', testDeleteButton)); */


/* let testattVar = 'testatt2';        //Attribute we want to know the element of
let testAttributeQuery = document.querySelector(`[data-test = ${testattVar}]`).innerHTML; //getting the element text content
console.log(testAttributeQuery);
let searchIndex = myLibraryTest.findIndex((book)=>book.title==testAttributeQuery); // Search the object array
console.log(`Library index: ${searchIndex}`);
console.log(myLibraryTest[searchIndex]);
 */

/* let testValue = testAttributeQuery.value;
console.log(testValue); */

/* let deleteBookButton = document.querySelector('.deleteBook');
let deleteId = deleteBookButton.dataset.test;
deleteBookButton.addEventListener('click', ()=>{
    console.log(deleteId);
}); */

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
    document.getElementById('readStatus').checked = false;
}

