import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  loginForm: FormGroup;
 
  
    
  
  
  username:string;
  password:string;
  
    constructor() {
  
     }

     eseguoLogIn(){
      sessionStorage.setItem("nome",this.username);
      sessionStorage.setItem("password",this.password);
     }

  ngOnInit(): void {

  }

}
