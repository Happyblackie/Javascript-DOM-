//traversing the DOM 

const bookList  = document.querySelector('#book-list');

console.log('the parent node is ',bookList.parentNode); //gives the parent node/element
console.log('the parent element is ',bookList.parentElement); //gives the parent node/element
            //gives the parent node/element one step up
console.log('the parent element is ',bookList.parentElement.parentElement); 

/* child nodes */
console.log(bookList.childNodes);
console.log(bookList.children);