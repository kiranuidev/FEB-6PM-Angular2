//Services are injectable components.
// to build a service we need to import Injectable.
import { Injectable } from '@angular/core';
//decorate the class as @injectable().
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs';


@Injectable()
export class RegisterService{
    constructor(private http:Http){

    }

    registerUser(data):Observable<any>{
        return this.http.post("/api/users/createuser",data)
        .map(res=>res.json())
        .catch(error=>error.json());
    }
    getCountries(){
        return [{name:"India",code:"IN"},
        {name:"Canada",code:"CA"}]
    }
}