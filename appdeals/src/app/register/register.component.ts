import { Component } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
//Impor the service
import { RegisterService } from "./register.service"
//Decorator
@Component({
    selector: "appdeals-register",
    templateUrl: "./register.component.html",
})

export class RegisterComponent {

    // inject the register service as a dependency to the constuctor.
    //this kind of passing dependencies to the constructor are called
    //constructor Dependency Injection.
    constructor(private registerSvc: RegisterService) {
        this.options = new DatePickerOptions();
    }

    date: DateModel;
    options: DatePickerOptions;

    user: Object = {
        email: "kiranthecoder@gmail.com"
    }
    selectedCountry: String
    //countries = [{ name: "India", code: "IN" }, { name: "United States", code: "USA" },]
    countries = this.registerSvc.getCountries();
    create() {
        this.registerSvc.registerUser(this.user)
            .subscribe((res) => {
                console.log(res);
            })
    }
    countrySelected() {
        console.log(this.selectedCountry);
    }
}