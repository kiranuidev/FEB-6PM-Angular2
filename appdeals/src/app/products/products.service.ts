import {Injectable} from "@angular/core";
//importing the Http Module.
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs';
@Injectable()
export class ProductsService{
  //injecting th Http Service as a dependency.
  constructor(private http:Http){

  }
  getProducts():Observable<any>{
    return this.http.get("/api/products.json")
    .map((res)=>res.json())
    .catch((error)=>error.json());
     //return [{name:"iPhone",model:"7s"}]
  }
  addProduct(){

  }
  searchProduct(){
      
  }
}