var titles = document.getElementsByClassName('title');

//console.log(Array.isArray(titles)); checks if an array , no false

//console.log(Array.isArray(Array.from(titles))); coverts it to an array now

Array.from(titles).forEach(function(item){
    console.log(item);
});


//same thing, same result

let q = document.querySelectorAll('.title'); //here there is no conversion to an aarray
console.log(q);

q.forEach(function(w){
    console.log(w);
});