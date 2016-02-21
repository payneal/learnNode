// pattern 1
var greet = require('./greet1'); 
greet(); 

// pattern 2
var greet2 = require('./greet2').greet; 
greet2(); 

// pattern 3
var greet3 = require('./greet3'); 
greet3.greet();
greet3.greetings = "changed"; 

var greet3b = require('./greet3'); 
greet3b.greet();

//pattern 4
var Greet4 = require('./greet4');
var grtr = new Greet4(); 
grtr.greet(); 
grtr.greetings = 'changed try'; 

var grtrb = new Greet4(); 
grtrb.greet(); 

//pattern 5
var greet5 = require('./greet5').greet; 
greet5(); 



