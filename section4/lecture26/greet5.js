// the reviling module pattern


// way to make private
var greeting = 'good bye'; 

function greet() {
    console.log(greeting); 
}

module.exports = {
    // public 
    greet: greet
}; 


