document.addEventListener('DOMContentLoaded', function(){
    //Event bubbling

//adding event listeners... deleting attached to ul. well explained on note boook
//this is the best way



//delete books
let ul = document.querySelector('ul');
console.log(ul);

ul.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        const li = e.target.parentElement;
        ul.removeChild(li);
    }
});

//add books
var addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
        //prevent default behaviour of refrshing the li
        e.preventDefault();
        //grab  the value user inputs and store it in a variable
        const value = addForm.querySelector('input[type="text"]').value;
        //console.log(value);

        //create elements
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        ul.appendChild(li);

        //addcontent
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

        //add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');
        
});


//hide books by checking the checkbox
const hideBooks = document.querySelector('#hide');

hideBooks.addEventListener('change',function(e){
    if(hideBooks.checked){
        ul.style.display = 'none'; //hides
    }else{
        ul.style.display = 'initial'; //unhides
    }
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = ul.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    });
});


// tabbed content
/* const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'li'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
}); */


});