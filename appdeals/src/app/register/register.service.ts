//Services are injectable components.
// to build a service we need to import Injectable.
import { Injectable } from '@angular/core';
//decorate the class as @injectable().

@Injectable()
export class RegisterService{
    getCountries(){
        return [{name:"India",code:"IN"},
        {name:"Canada",code:"CA"}]
    }
}