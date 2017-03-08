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
//query="/v1/search?query=ipod&format=json&apiKey=9sp3mm93hkvjbfuv6bc5fex8"
  getProducts():Observable<any>{
  //  var url = "/wallmart"+this.query;
    return this.http.get("/api/products")
    .map(res=> res.json() )
    .catch((error)=>error.json());
     //return [{name:"iPhone",model:"7s"}]
  }
  addProduct(){

  }
  searchProduct(){
      
  }
}