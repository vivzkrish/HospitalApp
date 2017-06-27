import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AppoinmentService} from "../appoinment/appoinment.service";
import {GetImageService} from "./get-image.service";

@Component({
  selector: 'app-confirm-appoinment',
  templateUrl: './confirm-appoinment.component.html',
  styleUrls: ['./confirm-appoinment.component.css']
})
export class ConfirmAppoinmentComponent implements OnInit {

  data:{id:number};
  PropertyName:string;
  PropertyAddress1:string;
  PropertyAddress2:string;
  PropertyCost:number;
  PropertySize:number;
  PropertyDate:string;
  PropertyImage:any;


  constructor(private route:ActivatedRoute,
              private router:Router,
              private appoinment:AppoinmentService,
              private image:GetImageService)
  {
  }

  ngOnInit() {
    this.data=
      {
       id:this.route.snapshot.params['data.PropertyId']

      };

     this.route.params.subscribe(
        (params:Params)=>
    {
        this.data.id=params['data.PropertyId'];
    }
    );
   /* console.log(this.data.id);*/
  /* let individualProperty=this.appoinment.listofData[0];
   console.log('Property Id'+individualProperty['PropertyId']);*/


    for(let detail of this.appoinment.listofData)
    {
      if(detail['PropertyId']===this.data.id)
      {
          this.PropertyName=detail['PropertyName'];
          this.PropertyAddress1=detail['PropertyAddress1'];
          this.PropertyAddress2=detail['PropertyAddress2'];
          this.PropertyCost=detail['PropertyCost'];
          this.PropertySize=detail['PropertySize'];
          this.PropertyDate=detail['PropertyUpdate'];
          this.PropertyImage=detail['PropertyThumb2'];
          console.log(  this.PropertyImage);
          this.image.getImage(this.PropertyImage).subscribe(

            (image)=>
            {
            console.log('Image parsed Successfully');
            this.PropertyImage=image;
            }
          )

         }
    }
  }

  setDefaultPic()
  {
    this.PropertyImage = "assets/home.jpg";
  }
  onClickButton()
  {
      this.router.navigateByUrl('/patient/appoinment');
  }
}
