import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface PropertyTaxForm{
  year:number,
  name:String,
  email:String,
  address:String,
  zone:String,
  description:String,
  status:String,
  buildyear:number,
  buildarea:number,
  tax:number
}


@Injectable({
  providedIn: 'root'
})
export class PropertyformService {

  constructor(private http : HttpClient) { }

  allZones():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getZones");
  }

  allDescriptions():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getDescriptions");
  }

  allStatus():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getStatus");
  }

  getPropertyTax(propertyForm:PropertyTaxForm):Observable<any>{
    return this.http.post<any>("http://localhost:1010/getPropertyTax",propertyForm);
  }

  savePropertyTax(propertyForm:PropertyTaxForm,tax:number):Observable<any>{
    return this.http.post<any>("http://localhost:1010/savePropertyTax/"+tax,propertyForm);
  }

}
