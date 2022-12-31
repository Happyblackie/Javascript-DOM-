//traversing the DOM  part 2  on elements on the same level eg chil to child

const bookList  = document.querySelector('#book-list');

//text wich is a line break, line breaks are also nodes
console.log('the next chil element of #booklist is: ',bookList.nextSibling); 

//gives the next element, not a line break now
console.log('the next child element of #booklist is: ',bookList.nextElementSibling); 

//text wich is a line break, line breaks are also nodes
console.log('the previous child element of #booklist is: ',bookList.previousSibling); 

//gives the next element, not a line break now
console.log('the previous child element of #booklist is: ',bookList.previousElementSibling); 


