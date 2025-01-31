import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {

  constructor(private http:HttpClient) {}
  public searchProducts:any[]=[];
  private subject=new Subject<any>();
 
     private url:string=" http://localhost:3000/";

     fetchData(search:string):Observable<any[]>{
  return this.http.get<any[]>(this.url+search);
  }

  sendSearchData(message:any){
    this.subject.next(message);
  }

 
  receiveSearchData():Observable<any>{
    return this.subject.asObservable();
  }

  
 
}
