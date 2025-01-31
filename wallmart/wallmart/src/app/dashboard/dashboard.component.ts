import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/Item';
import { AuthService } from '../services/auth.service';
import { ApiDataService } from '../services/api-data.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService:ApiDataService,private _cart:WishlistService) { }

ngOnInit(): void {

}
   public products:any[]=[];


onSearch(keyword:string){
  this.apiService.fetchData(keyword).subscribe(data=>this.products=data); 
}
addToWishlist(p:Item){
  alert("Add");
  this._cart.addItem(p).subscribe(res=>{
    console.log(res);
    alert("Product added to Cart");
  },error=>{
    alert(error);
  });

}

}
