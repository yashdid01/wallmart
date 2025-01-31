import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

   constructor(private _loginService:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    let newReq=req;
    let token=this._loginService.getToken();

        if(token!=null){
            newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }   
        return next.handle(newReq).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.error instanceof ErrorEvent) {
                        console.error("Error Event");
                    } else {
                        switch (error.status) {
                            case 401:      //login
                                alert(error);
                                break;
                            case 409:     //forbidden
                            alert("User already exist!");
                                break;
                        }
                    } 
                } else {
                    console.error("some thing else happened");
                }
              return throwError(error.message);
            })
          );
     }
    
}