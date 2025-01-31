import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public UserInfo: any;
  private login=new Subject<any>();
  private url: string = "http://localhost:8999";

  constructor(private http: HttpClient) { }



  UpdateUser(data:any,email:any):Observable<any>{
    const headers = { 'content-type': 'application/json'}
      return this.http.put<any>(this.url+`/user/update/${email}`,data,{'headers':headers});
   }

  doLogin(credentials: any): Observable<any> {
    return this.http.post<any>(this.url + "/user/token", credentials);
  }

  loginUser(token: any) {
    localStorage.setItem('token', token.jwt);
    localStorage.setItem('username', token.username);
    localStorage.setItem('email', token.email);
    return true;
  }


  isLoggedInUser() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === "") {
      return false;
    } else {
      return true;
    }
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    return true;
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getUserName() {
    return localStorage.getItem('username');
  }
  getEmail() {
    return localStorage.getItem('email');
  }

}
