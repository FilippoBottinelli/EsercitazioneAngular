import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

user : string;
password : string;

assegnaUser(event){
  this.user=event;
}
assegnaPassword(event){
  this.password=event;
}

  bottoneClick() {
    sessionStorage.setItem("nome",this.user);
    sessionStorage.setItem("password",this.password);
  }

  

  constructor() {
   }

  ngOnInit(): void {

  }

}
