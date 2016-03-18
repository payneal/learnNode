'use strict'
let Greetr = require('./greeter.js'); 

let greeter1 = new Greetr(); 

greeter1.on('greet', function(data) {
    console.log('someone greeted!' + data ); 
}); 

greeter1.greet('Tony'); 


