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
        console.log(value);
        
});

