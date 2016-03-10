var Emitter = require('events');
var eventConfig = require('./config').events;  


var emtr = new Emitter();  

emtr.on(eventConfig.EVENT, function(){ 
    console.log('somewhere, someone said hello'); 
}); 

emtr.on(eventConfig.EVENT,   function(){
    console.log('a greeting happened'); 
});

console.log('hello'); 
emtr.emit(eventConfig.EVENT); 
