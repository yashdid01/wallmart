import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router , private _auth:AuthService) { }
public login_status:boolean=false;
ngDoCheck(){
  // this._auth.receiveLoginStatus().subscribe(data=>{
  //     this.login_status=data;
  //     console.log(this.login_status);
  //   })
  
} 
ngOnInit(): void {
  this.login_status=this._auth.isLoggedInUser();
}
  public products:any[]=[];

  Logout(){
    this.login_status=this._auth.logoutUser();
    alert('User Logged Out Successfully');
    window.location.href="/login";
  }
}
