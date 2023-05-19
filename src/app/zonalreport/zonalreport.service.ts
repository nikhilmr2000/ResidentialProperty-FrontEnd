import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ZonalWiseReport{
  year:number,
  zone:String,
  status:String,
  amount:number
}

interface ListOfZone{
  zonename:String,
  year:number,
  ownerval:number,
  tenantedval:number
}

@Injectable({
  providedIn: 'root'
})
export class ZonalreportService {

  constructor(private http:HttpClient) { }

  getAllZonalReport():Observable<any>{
      return this.http.get<any>("http://localhost:1010/allzonalReport");
  }

  getListOfZones(year:number):Observable<any>{
    return this.http.get<any>("http://localhost:1010/getListOfZone/"+year);
  }

}
