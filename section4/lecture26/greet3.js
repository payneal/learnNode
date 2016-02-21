// replace export with my own export

function Greetr() {
    this.greetings = 'Hello world!!!';  
    this.greet = function() {
        console.log(this.greetings);     
    }; 
}

module.exports = new Greetr(); 


