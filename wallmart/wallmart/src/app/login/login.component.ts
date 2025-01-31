import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup = new FormGroup({});
  constructor(private form: FormBuilder, private route: Router, private http: HttpClient, private auth: AuthService) {
    this.formGroup = this.form.group({

      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

      checkBox: new FormControl('')
    });
  }//constructor
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get name() {
    return this.formGroup.get('name');
  }

  get email() {
    return this.formGroup.get('email');
  }
  get password() {
    return this.formGroup.get('password');
  }
  get passwordConfirm() {
    return this.formGroup.get('passwordConfirm');
  }
  get checkBox() {
    return this.formGroup.get('checkbox');
  }


  


  onLogin() {
    let credentials = {
      username: this.formGroup.value.email,
      password: this.formGroup.value.password
    }
   
    this.auth.doLogin(credentials).subscribe(res => {
      this.auth.loginUser(res);
       alert("Welcome " + res.username);
      window.location.href = "/";
     }
    );

  }


}
