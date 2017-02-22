class Employee {

     constructor(){
         this.createdTime= new Date();
         this.getUserDetails();
    }
    firstName: String
    lastName: String
    age: Number
    gender: String
    agree: Boolean
    address: any
    createdTime:Date
   private getUserDetails(){
        console.log("I am a user");
    }
}

class Manager extends Employee{
    //  constructor(){
    //     super();
    // }
  role:String
  //array declaration for reportess.
  //it is a type of string array.
  reportees:Array<String>
}

function getAccountDetails(){
   console.log("Account Details");
}

var emp = new Employee();
emp.firstName = "Kiran";
emp.lastName = "Patur";
emp.age = 30;
emp.gender = "M";
emp.agree = true;
emp.address = {
    city: "Hyderabad",
    state: "Telangana",
    country: "India"
};
var mag = new Manager();