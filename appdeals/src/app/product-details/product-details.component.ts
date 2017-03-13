import {Component,Input} from "@angular/core";

@Component({
    selector:"product-details",
    templateUrl:"./product-details.component.html"
})

export class ProductDetails{
@Input() selectedProduct:any
}