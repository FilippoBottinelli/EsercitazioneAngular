import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';​

​

@Injectable()​

export class AuthGuard implements CanActivate {​

  canActivate() {​

    //verifico che i dati di login corrispondano a quelli scelti da me

    if(sessionStorage.getItem("nome")=="marco" && sessionStorage.getItem("password")=="123")
    return true;​

  }​

}

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {

  constructor() { }
}
