import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { DatePickerModule } from 'ng2-datepicker';
 import { DatepickerModule } from 'ng2-bootstrap';
//User defined components 

import {HeaderComponent} from './header/header.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
