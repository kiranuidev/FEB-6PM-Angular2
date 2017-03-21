import {Component,Input,Output,EventEmitter} from "@angular/core";
//Input is to take data from parent.
//Output is to send data to parent with help of events
//EventEmitter is a class which will allow the user to define the events.
@Component({
    selector:"product-details",
    templateUrl:"./product-details.component.html"
})

export class ProductDetails{
@Input() iamChildProperty:any
@Output() itemUpdated = new EventEmitter<any>()
  
   edit(){
       this.itemUpdated.emit(this.iamChildProperty);
   }

}