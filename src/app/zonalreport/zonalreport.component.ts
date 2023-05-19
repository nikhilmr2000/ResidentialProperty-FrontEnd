  import { Component, OnInit } from '@angular/core';
import { ZonalreportService } from './zonalreport.service';

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


@Component({
  selector: 'app-zonalreport',
  templateUrl: './zonalreport.component.html',
  styleUrls: ['./zonalreport.component.scss']
})
export class ZonalreportComponent implements OnInit{

  year:number=0;
  zonalReport:ZonalWiseReport[]=[];

  listDetails:ZonalWiseReport[]=[];
  m:number=0;

  listZone:ListOfZone[]=[];
  novisible:boolean=false;

  constructor(private service : ZonalreportService){
    
  }
  ngOnInit(): void {
    
  }

  onClick(){
    this.listDetails=[];
    this.service.getAllZonalReport().subscribe((data)=>{
        this.zonalReport=data;     
    });


    for(let i=0;i<this.zonalReport.length;i++){

      if(this.zonalReport[i].year==this.year){
        console.log(this.zonalReport[i]);
       this.listDetails.push(this.zonalReport[i]);
      }
    }

    console.log(this.listDetails);

    this.service.getListOfZones(this.year).subscribe((data)=>{
      console.log(data);
      this.listZone=data;
      if(this.listZone.length==0){
        this.novisible =true;
      }
      else{
        this.novisible=false;
      }

    });

  }



}
