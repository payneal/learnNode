var util = require('util'); 

var name = 'Ali'; 

var greeting = util.format('hello, %s', name); 

util.log(greeting); 
