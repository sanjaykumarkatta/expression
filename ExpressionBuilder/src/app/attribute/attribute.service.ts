import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AttributeService {

  constructor(private http: Http) { }
  
 getAttributeList(){
   return this.http
     .get('../data/attributeData.json')
     .map((response: Response) => response.json());
 }

}
