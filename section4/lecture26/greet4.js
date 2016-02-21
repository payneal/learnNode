// replace export with my own export

function Greetr() {
    this.greetings = 'Hello, is it me your looking for';  
    this.greet = function() {
        console.log(this.greetings);     
    }; 
}

module.exports =  Greetr; 


