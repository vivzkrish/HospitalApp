import { Injectable } from '@angular/core';
import {URLSearchParams, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {
  constructor(private  http:Http){

  }
  registerUser(uname,pwd,email,mob,dob,add1,add2,utype)
  {
    let params:URLSearchParams=new URLSearchParams();
    params.set('username',uname);
    params.set('password',pwd);
    params.set('email',email);
    params.set('mobile',mob);
    params.set('dob',dob);
    params.set('address1',add1);
    params.set('address2',add2);
    params.set('usertype',utype);
    console.log(params);
    let body=params;



    return this.http.post(`http://rjtmobile.com/aamir/realestate/realestate_app/estate_reg_corsEnabled.php`,body)
      .map(
        (res:Response) =>
        {
          console.log(res);
          return res.text();
        }
      )
      .catch(
        (error:Response)=>
        {
          console.log('Somthing went wrong with the request');
          return Observable.throw(error);
        }

      )

  }

}
