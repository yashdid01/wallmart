import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient,private auth:AuthService) { }

  
  private url:string="http://localhost:8088";
 public productCart = new Set();  
 
 //add items to wishlist
 addItem(data:any):Observable<any>{
   let item:Item=new Item();
   item.setImageUrl(data.image);
   item.setProductID(data.productId);
   item.setPrice(data.price);
   item.setTitle(data.title);
   item.setRatings(4);
   item.setTotalRatings(1000);
   item.setShippingDays(2);
 
   
     const headers = { 'content-type': 'application/json'}
     let jsonItem=JSON.stringify(item);
    
     return this.http.post(this.url+"/wishlist/"+this.auth.getEmail(),jsonItem,{'headers':headers})
   }
 
 //get all items from the spring-boot wishlist microservice 
   getItems(){
     return this.http.get<Item[]>(this.url+"/wishlist/"+this.auth.getEmail());
   }
 
 //delete a particular item from spring boot server
   deleteItem(item:Item){
    console.log(item);
    return this.http.delete<number>(this.url+"/wishlist/"+this.auth.getEmail()+"/"+item.productId);
   }
 

  }
