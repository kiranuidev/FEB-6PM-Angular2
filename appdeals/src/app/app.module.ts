import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { DatePickerModule } from 'ng2-datepicker';
 import { DatepickerModule } from 'ng2-bootstrap';
//User defined components 

import {HeaderComponent} from './header/header.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProductsComponent} from "./products/products.component"
import { AppComponent } from './app.component';
import { ProductDetails } from './product-details/product-details.component';
//registering the service globally.

import {RegisterService} from "./register/register.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent
,ProductDetails  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DatepickerModule.forRoot()
  ],
  //Registering the service at the module level.
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
