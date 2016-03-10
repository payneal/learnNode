// object proberties and methods 
//

var obj = {
    greet: 'hello'
}

console.log(obj.greet); 
//or 
console.log(obj['greet']); // so this is able to be dynamic
// even use a string to make a call 
var prop = 'greet'; 
console.log(obj[prop]); 


// functions and arrays
var arr = []; 

//push string
//arr.push('hello'); 

// push number
//arr.push(8); 

// push etc.

// can also add function bucause in js everything is an object

arr.push(function() {
    console.log('hello world 1'); 
}); 

arr.push(function() {
    console.log('hello world 2'); 
}); 

arr.push(function() {
    console.log('hello world 3'); 
}); 

// above 3 functions in an array will be called
arr.forEach(function(item){ 
    item(); 
}); 




