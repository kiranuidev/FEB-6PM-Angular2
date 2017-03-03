import { Component } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
//Decorator
@Component({
    selector: "appdeals-register",
    templateUrl: "./register.component.html",
})

export class RegisterComponent {
    date: DateModel;
    options: DatePickerOptions;

    constructor() {
        this.options = new DatePickerOptions();
    }
    user: Object = {
        email: "kiranthecoder@gmail.com"
    }
    selectedCountry: String
    countries = [{ name: "India", code: "IN" }, { name: "United States", code: "USA" },]
    create() {
        console.log(this.user);
    }
    countrySelected() {
        console.log(this.selectedCountry);
    }
}