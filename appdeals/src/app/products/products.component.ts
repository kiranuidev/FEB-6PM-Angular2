
import { Component } from '@angular/core';
//Import products service
import { ProductsService } from "./products.service"

@Component({
    selector: "appdeals-products",
    templateUrl: "./products.component.html",
    providers: [ProductsService]
})

export class ProductsComponent {
    constructor(private productsSvc: ProductsService) {
        this.getProducts();
    }
    product={};
    products:any
    itemSelected={}
    getProducts() {
        this.productsSvc.getProducts()
            .subscribe(res => {
                this.products = res;
                console.log(res);
            },
            err=>{
                console.log(err);
            })
    }


    addProduct() {
        this.productsSvc.addProduct(this.product)
        .subscribe(res => {
               // this.products = res;
                console.log(res);
            },
            err=>{
                console.log(err);
            })

    }
    search(query) {
        this.productsSvc.searchProduct();
    }

    select(item){
        this.itemSelected = item;
        console.log(this.itemSelected);
    }
}