import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { newUser } from '../models/newUser';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ConfirmedValidator } from './ConfirmedVaildator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user!: newUser;
  public formGroup = new FormGroup({});
  constructor(private form: FormBuilder, private route: Router, private http: HttpClient, private _userService: UserService, private auth: AuthService) {

    this.formGroup = this.form.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
      checkBox: new FormControl('')
    }, {
      validator: ConfirmedValidator()
    });
  }
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




  onRegister() {
    this.user = {
      username: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      role: "USER"
    }
    this._userService.createNewUser(this.user).subscribe(() => {
      alert("User Registered Successfully!");
      this.formGroup.reset();
      this.route.navigate(['/login']);
    }, error => {
      alert("Error encountered During Registration.Please Retry");
    });
  }




}
