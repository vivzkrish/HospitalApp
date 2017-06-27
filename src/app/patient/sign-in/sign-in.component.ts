import { Component, OnInit } from '@angular/core';
import {SignInService} from "./sign-in.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  result;
  error='';
  mobile:number;
  password:number;
  constructor(private loginservice:SignInService,private route:Router) { }
  ngOnInit() {
  }
  loginSubmit(mobile:number,password:number)
  {
    this.mobile=mobile;
    this.password=password;
    this.loginservice.login(mobile,password).subscribe((data)=>
    {
      this.result=data;
        if(this.result.result==='login_ok') {
         /* this.route.navigate(["./patient/patient-home"]);*/
          this.route.navigate(["./patient/appoinment"]);
        }
        else {
          this.error='Username/Password Wrong';
        }
    });
  }
}
