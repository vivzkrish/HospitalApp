import { Component, OnInit } from '@angular/core';
import {SignupService} from "./signup.service";
import {Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,CanComponentDeactivate {

  constructor(private signup:SignupService,
              private router:Router) { }

  ngOnInit() {
  }
    result='';
  uname:string;
  pwd:string;
  mob:number;
  email:string;
  dob:string;
  add1:string;
  add2:string;
  utype:string;

  changesSaved=false;

  onSubmit(uname,pwd,email,mob,dob,add1,add2,utype)
  {
    this.uname=uname;
    console.log(uname);
    this.pwd=pwd;
    this.email=email;
    this.mob=mob;
    this.dob=dob;
    this.add1=add1;
    this.add2=add2;
    this.utype=utype;

    this.signup.registerUser(uname,pwd,email,mob,dob,add1,add2,utype).subscribe(
      (data)=>
    {
      this.result=data;
      console.log("Api post result "+this.result);
    });
      this.changesSaved=true;

  }

  canDeactivate(): Observable<boolean> |Promise<boolean> |boolean
{
if((this.uname!='' || this.utype!='' ||this.dob!=''
  ||this.email!='' || this.add1!=''|| this.add2!=''
   || this.utype!='')&&!this.changesSaved)
{
return confirm("Do u want to discard changes?");
}

}

}
