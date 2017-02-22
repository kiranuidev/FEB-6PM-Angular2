var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.getUserDetails = function () {
        console.log("I am a user");
    };
    return Employee;
}());
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Employee));
function getAccountDetails() {
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
