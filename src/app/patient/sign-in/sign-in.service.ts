import { Injectable } from '@angular/core';
import {URLSearchParams, Response, Http} from "@angular/http";


@Injectable()
export class SignInService {

  constructor(private http: Http) {
  }

  loggedIn = false;
  user;

  login(mobile, password) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('user_mobile', mobile);
    params.set('user_password', password);
    return this.http.get(`http://rjtmobile.com/medictto/patient_login.php`, {search: params})
      .map(
        (res: Response) => {
          this.user = res.json();
          console.log(this.user);
          if (this.user.result === 'login_ok') {
            this.loggedIn = true;
          /*  console.log('login success !');*/
          }
          else {
            this.loggedIn = false;

            /*console.log('login failed !');*/
          }

          return this.user;
        }
      )
  }

  isAuthenticated() {
    console.log("auth called");
    if (this.loggedIn) {
      return true;
    }
    else {
      return false;
    }
  }
}
