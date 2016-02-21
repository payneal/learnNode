// immeditally invoked function


var firstname = 'Jane'; 
(function (lastname) {
    
        var firstname = "ali"; 
        console.log(firstname); 
        console.log(lastname);
}('Doe')); 

console.log(firstname); 


