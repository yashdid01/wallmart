import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newUser } from '../models/newUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }


  private url:string="http://localhost:8999";
   createNewUser(credentials:newUser):Observable<any>{
    console.log("register");
     return this._http.post<newUser>(`${this.url}/user/registerUser`,credentials);
   }
}
