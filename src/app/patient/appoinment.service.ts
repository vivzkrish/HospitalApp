import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class AppoinmentService {

  listofData=[{}];
  constructor(private http:Http) { }

  displayList()
  {
   return this.http.get('http://rjtmobile.com/aamir/realestate/realestate_app/getproperty.php?')
      .map(
        (res:Response)=>
        {
          this.listofData=res.json()['Property List'];
          console.log(this.listofData);
          return this.listofData;
        }
      );
  }


}
