import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UnitAreaValue{
  category:String,
  description:String,
  status:String,
  zone:String,
  unitarea:number
}

@Injectable({
  providedIn: 'root'
})
export class AddzoneService {

  constructor(private http:HttpClient) { }

  allDescriptions():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getDescriptions");
  }

  allStatus():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getStatus");
  }

  saveNewZones(unitval:UnitAreaValue):Observable<any>{
    return this.http.post<any>("http://localhost:1010/saveUnitArea",unitval);
  }

  getZones():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getZones");
  }

  getAllUnitArea():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getAllUnitArea");
  }

  getAllCategory():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getAllCategory");
  }

  getDescriptions():Observable<any>{
    return this.http.get<any>("http://localhost:1010/getDescriptions");
  }

  getDescriptionandZoneTenated(description:String,zone:String):Observable<any>{
    return this.http.get<any>("http://localhost:1010/unitAreaTenated/"+description+"/"+zone);
  }

}
