
import { Component, Output, EventEmitter } from '@angular/core';
//Import products service
//1. Import output, EventEmitter
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
    product = {};
    products: any
    parentProperty = {}
    //2. decore updateCart as Output of type EventEmitter.
    @Output() updateCart = new EventEmitter<any>();
    @Output() removeFromCart = new EventEmitter<any>();
    select(item) {
        this.parentProperty = item;
        item.selected = true;
        console.log(this.parentProperty);
        //3. once the item selected emit an event i.e. updateCart
        this.updateCart.emit(item);
    }

    remove(item) {
        item.selected = false;
        this.removeFromCart.emit(item);
    }

    getProducts() {
        this.productsSvc.getProducts()
            .subscribe(res => {
                this.products = res;
                console.log(res);
            },
            err => {
                console.log(err);
            })
    }


    addProduct() {
        this.productsSvc.addProduct(this.product)
            .subscribe(res => {
                // this.products = res;
                console.log(res);
            },
            err => {
                console.log(err);
            })

    }
    search(query) {
        this.productsSvc.searchProduct();
    }


    getFinalProduct(data) {
        console.log(data);
    }
}