import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';​

​
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {​

    //verifico che i dati di login corrispondano a quelli scelti da me

    if(sessionStorage.getItem("nome")!= null)
    return true;​
    else
    return false;

  }​
}
