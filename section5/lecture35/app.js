var person  = {
    fname: '',
    lname: '',
    greet: function(){
        return this.fname + ' ' + this.lname;
    } 
}; 

var john = Object.create(person); 
john.fname = 'John'; 
john.lname = 'Doe'; 

var jane = Object.create(person); 
jane.fname = 'Jane'; 
jane.lname = 'Doe'; 

console.log(john.greet()); 
console.log(jane.greet()); 



