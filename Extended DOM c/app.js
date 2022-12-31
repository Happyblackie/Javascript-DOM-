//query selectors
const wmf = document.querySelector('#book-list li:nth-child(2) .name'); //finds the nth child second child
//console.log(wmf);

let lis = document.querySelector('#book-list li .name'); //single selection
//console.log(lis);

lis = document.querySelectorAll('#book-list li .name'); //multi selection
console.log(lis);

lis.forEach(function(li){        //same as this but this >>      Array.from(lis).forEach(function(li){
    console.log(li);             //is converted to an array           console.log(li);
});                                                            //});
                                                        


   
