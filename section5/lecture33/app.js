 var Emitter = require('./emitter');

var emtr = new Emitter();  

emtr.on('greet', function(){ 
    console.log('somewhere, someone said hello'); 
}); 

emtr.on('greet', function(){
    console.log('a greeting happened'); 
});

console.log('hello'); 
emtr.emit('greet'); 
