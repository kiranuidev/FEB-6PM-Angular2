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
    loadContent(item){
        this.contentType=item;
    }
}