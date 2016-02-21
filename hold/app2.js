function Person(first, last) {
    this.lastname = last; 
    this.first = first;  
}


Person.prototype.greet = function() {
    console.log('hi, ' + this.first);  
}; 

var john = new  Person('John', 'Doe'); 

john.greet(); 

var jane = new Person('Pam', 'Sanders');

jane.greet();


console.log(john.__proto__); 

