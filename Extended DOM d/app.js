//changing innertext
var books = document.querySelector('#book-list li .name');
console.log(books);
console.log(books.textContent); //reveals the content
books.textContent = 'javascript'; //change the content
books.textContent += ' is awesome'; //appends the content

//changing innerHtml  and looping through
let bookList = document.querySelectorAll('#book-list li');
console.log(bookList);
bookList.forEach(function(bkl){
    console.log(bkl.innerHTML); //reveals the inner text
    bkl.innerHTML = '<p>am happy to be here</p>'; //change element
    bkl.innerHTML += '<h6> indeed its my pleasure</p>'; //append element
});

   
