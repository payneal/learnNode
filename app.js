//var greet =  require('./app2'); 

//greet(); 

var person = {
    name: 'ali', 
    lastname: 'payne', 
    greet: function() {
        console.log('hello, ' + this.name + ' ' + this.lastname);
    }
}; 

person.greet();
console.log(person.name); 


