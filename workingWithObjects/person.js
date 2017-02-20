/*
 object literal way of creating an object.
*/
var Person ={
    country: "India"
};
Person.firstName="Kiran";
Person.lastName="Paturi";

/*Constructor way of creating an object*/

function User(){
    /*private properties*/
    var ssn ="";
        
    /*pubic property*/
    this.username="";
}
var admin = new User();
admin.role="Admin";

var manager = new User();
manager.reportees=100;

console.log(admin);
console.log(manager);














