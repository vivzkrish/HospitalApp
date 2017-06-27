import { Injectable } from '@angular/core';
import {Http, Response, ResponseContentType} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class GetImageService {
  constructor(private http:Http) { }
  getImage(url:string)
  {
   /*return this.http.get(url,{responseType:ResponseContentType.Blob})
      .map(
        (res:Response)=>
        {
          console.log(res.blob());
            return res.blob() ;

        }

      );*/
    return Observable.create(observer=>{
      let req = new XMLHttpRequest();
      req.open('get',url);
      req.responseType = "arraybuffer";
      req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
          observer.next(req.response);
          observer.complete();
        }
      };
      req.send();
    });
  }
}
