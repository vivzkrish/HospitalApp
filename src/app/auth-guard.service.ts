import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from "@angular/router";
import {Observable} from "rxjs";
import {SignInService} from "./patient/sign-in/sign-in.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private route:Router,private signin:SignInService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean
  {
      console.log('canActivate called');
      if (this.signin.isAuthenticated())
      {
        this.route.navigate(["./patient/sign-in"]);

      }
      else return false;
  }


  }





