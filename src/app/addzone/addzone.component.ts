import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddzoneService } from './addzone.service';



interface UnitAreaValue{
  category:String,
  description:String,
  status:String,
  zone:String,
  unitarea:number
}


@Component({
  selector: 'app-addzone',
  templateUrl: './addzone.component.html',
  styleUrls: ['./addzone.component.scss']
})
export class AddzoneComponent implements OnInit{

  zone:String="";
  unit:number=0;

  desc:String="";
  descriptionlist:String[]=[];
  status:String="";
  statuslist:String[]=[];

  zonelist:String[]=[];
  zonelength:number=0;
  allUnitArea:UnitAreaValue[]=[];

  unitarea:UnitAreaValue;
  category:String[]=[];

  descriptions:String[]=[];
  unitAreaValue:UnitAreaValue;

  @Input()
  userdesc:String="";

  @Input()
  userzone:String="";

  constructor(private service:AddzoneService){
    this.unitarea={} as UnitAreaValue;
    this.unitAreaValue={} as UnitAreaValue;
  }

  ngOnInit(): void {
    
    this.service.allDescriptions().subscribe((data)=>{
      this.descriptionlist=data;
    });

    this.service.allStatus().subscribe((data)=>{
      this.statuslist=data;
    });

    this.service.getZones().subscribe((data)=>{
      this.zonelist=data;
      this.zonelength=this.zonelist.length;
    });


    this.service.getAllUnitArea().subscribe((data)=>{
      this.allUnitArea=data;
    });

    this.service.getAllCategory().subscribe((data)=>{
      this.category=data;
    });

    this.service.allDescriptions().subscribe((data)=>{
      this.descriptions=data;
    });

   

  }

  onzone(event:any){
    this.zone=event.target.value;
  }

  onunit(event:any){
    this.unit=event.target.value;
  }

  addzone(){

    this.unitarea.description=this.desc;
    this.unitarea.status=this.status;
    this.unitarea.zone=this.zone;
    this.unitarea.unitarea=this.unit;

    if(this.desc=="RCC buildings"){
      this.unitarea.category="I";
    }
    else if(this.desc=="RCC buildings with cement of red-oxide floorings"){
      this.unitarea.category="II";
    }
    else if(this.desc=="Tiled/Sheet of all kinds"){
      this.unitarea.category="III";
    }

    this.service.saveNewZones(this.unitarea).subscribe((data)=>{
      console.log(data);
      alert("New Zone has been Added");
      location.reload();
    });

  }

  getDescriptionZone(description:String,zone:String){
      this.service.getDescriptionandZoneTenated(description,zone).subscribe((data)=>{
        this.unitAreaValue=data;
        return this.unitAreaValue;
        console.log(this.unitAreaValue);
      });
       
  }



}
