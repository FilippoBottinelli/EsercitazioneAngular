import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

loginForm: FormGroup;
login = false;

username:string = this.loginForm.value.username;
password:string = this.loginForm.value.password;

  constructor() {
    
   }
   MioLogIn(){

   }

  ngOnInit(): void {

  }

}
