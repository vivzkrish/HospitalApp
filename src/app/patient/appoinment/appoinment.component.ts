import { Component, OnInit } from '@angular/core';
import {AppoinmentService} from "./appoinment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  listOfData=[{}];

  constructor( private app:AppoinmentService,private route:Router) { }

  ngOnInit() {
     }

  OnSubmitData(data)
  {
    console.log(data.PropertyId);
    this.route.navigate(["./patient/appoinment",data.PropertyId]);
  }

  onDisplay()
  {
    this.app.displayList().subscribe(
      (data)=>
      {
        this.listOfData=data;
      }
    );
  }


}

