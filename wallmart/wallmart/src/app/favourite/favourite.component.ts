import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private _wishlist:WishlistService) { }

  public products :Item[]=[];
   
  ngOnInit(): void {
   this._wishlist.getItems().subscribe(data=>this.products=data);
 }
 deleteProduct(product:any){ 
   this._wishlist.deleteItem(product).subscribe();
   alert('product deleted');
   this._wishlist.getItems().subscribe(data=>this.products=data);
 }
 

}
