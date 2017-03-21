import {Component} from '@angular/core';

//Decorator
@Component ({
    selector:"appdeals-header",
    templateUrl:"./header.component.html",
})

export class HeaderComponent{
    constructor(){

    }
    contentType="";
    cartItems=0;
    loadContent(item){
        this.contentType=item;
    }
    increment(data){
        this.cartItems++;
    }
    decrement(data){
        this.cartItems--;
    }
}