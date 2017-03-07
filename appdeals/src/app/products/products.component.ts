
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
    products:any
    getProducts() {
        this.productsSvc.getProducts()
            .subscribe(res => {
                this.products = res.data;
            });
    }


    addProduct(item) {
        this.productsSvc.addProduct();
    }
    search(query) {
        this.productsSvc.searchProduct();
    }
}