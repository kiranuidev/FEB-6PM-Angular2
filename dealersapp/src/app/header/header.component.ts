//Import the Component from angular/core

import {Component} from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
    // template:"<h1>I am the header</h1>"
})

export class HeaderComponent{
 //public member.
 header={
     brandName:"Product Deals"
 };
 showLink:boolean

 clickMe(){
     if(this.showLink ==true){
         this.showLink=false;
     }
     else{
         this.showLink =true;
     }
     console.log("Hey I got clicked");
 }
 handleKeyPress(){
     console.log("Hey You are entering data");
 }
}