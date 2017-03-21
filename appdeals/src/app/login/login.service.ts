import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class LoginService{
    constructor(private http:Http){

    }
    url="/api/users/login"

    loginUser(data):Observable<any>{
        return this.http.post(this.url,data)
        .map(response=>response.json());
    }
}