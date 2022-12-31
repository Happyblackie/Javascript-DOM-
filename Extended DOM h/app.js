//adding event listeners... deleting

var btns  = document.querySelectorAll('#book-list .delete');

btns.forEach(function(btn){
   btn.addEventListener('click',function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
   });
});



//preventing the behaviour of an element when clicked..for this case an anchor tag.
var prevent = document.querySelector('#page-banner a');

prevent.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to',e.target.textContent,'was prevented')
});

