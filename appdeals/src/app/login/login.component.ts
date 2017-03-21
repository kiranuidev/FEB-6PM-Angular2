import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder,FormGroup,Validators} from'@angular/forms';
//Decorator
@Component ({
    selector:"appdeals-login",
    templateUrl:"./login.component.html",
    providers:[LoginService]
})

export class LoginComponent{
    constructor(private loginSvc:LoginService,private fb:FormBuilder) {
         this.loginForm= fb.group({
             username:[null,Validators.compose([
                 Validators.required,
                 Validators.pattern(/^[a-zA-Z]*$/)
             ])],
             password:[null,
             Validators.compose(
                 [Validators.required, 
                 Validators.minLength(5), 
             Validators.maxLength(10),
             ])]
         });
    }
    loginForm:FormGroup;
    user={};
   
    login(){
        console.log(this.user);
        this.loginSvc.loginUser(this.user)
        .subscribe(data=>{
            console.log(data);
        })
    }

    loginUser(data){
        console.log(data);
    }
}