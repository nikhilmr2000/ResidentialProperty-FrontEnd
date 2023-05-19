import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { PropertyformService } from './propertyform.service';


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



@Component({
  selector: 'app-propertyform',
  templateUrl: './propertyform.component.html',
  styleUrls: ['./propertyform.component.scss']
})
export class PropertyformComponent implements OnInit{

  zonelist:any=[];
  descriptionlist:any=[];
  statusList:any=[];
  propertyForm:PropertyTaxForm;

  name:String="";
  year:number=0;
  email:String="";
  address:String="";
  zonals:String="";
  description:String="";
  status:String="";
  buildyear:number=0;
  buildarea:number=0;
  tax:number=0;
  val:any;
  desc:any;
  stat:any;
  build:any;
  area:any;

  constructor(private propertyService: PropertyformService){
    this.propertyForm={} as PropertyTaxForm;
  }

  ngOnInit(): void {
    this.getAllZones();
    this.getDescriptions();
    this.getStatus();
  }

  getAllZones(){
    this.propertyService.allZones().subscribe((data)=>{
      this.zonelist=data;
      console.log(this.zonelist);
    });
  }

  getDescriptions(){
    this.propertyService.allDescriptions().subscribe((data)=>{
      this.descriptionlist=data;
      console.log(this.descriptionlist);
    });
  }

  getStatus(){
    this.propertyService.allStatus().subscribe((data)=>
    {
      this.statusList=data;
      console.log(this.statusList);
    });
  }

  postPropertyForm(){

    this.propertyForm.year=this.year;

    this.propertyForm.name=this.name;
    this.propertyForm.address=this.address;
    this.propertyForm.email=this.email;
    this.propertyForm.zone=this.zonals;
    this.propertyForm.description=this.description;
    this.propertyForm.status=this.status;
    this.propertyForm.buildyear=this.buildyear;
    this.propertyForm.buildarea=this.buildarea;

    this.propertyService.getPropertyTax(this.propertyForm).subscribe((data)=>{
      this.tax=data;
      console.log(data);
    });
  }

  savePropertyForm(){
    this.propertyService.savePropertyTax(this.propertyForm,this.tax).subscribe((data)=>{
      console.log(data);
      alert("Tax Payment is Done");
      location.reload();
    });
  }

  cancelPropertyForm(){
    location.reload();
  }

  onyear(event:any){
    this.year=event.target.value;
    if(this.year>new Date().getFullYear()){
      this.year=0;
      alert("Please do not enter the future year");
    }
    console.log(this.year);
  }
  onname(event:any){
    this.name=event.target.value;
    console.log(this.name);
  }

  onemail(event:any){
    this.email=event.target.value;
  }

  onaddress(event:any){
    this.address=event.target.value;
  }
  onzonals(event:any){

    if(this.year==0){
      alert("Please Enter the Year");
      this.zonals="zones";

      if(this.zonals=="zones" && this.zonals!=null){
        this.val=document.getElementById("zonalss");
        const newval=this.val.querySelector('option[value="zones"]');
        newval.selected=true;
      }

      console.log("Zonals: "+ this.zonals);
    }
    else{
      this.zonals=event.target.value;
      console.log(this.zonals);
    }
    
  }

  ondescription(event:any){
    if(this.year==0){
      alert("Please enter the year");

      this.zonals="zones";
      this.description="desc";

      if(this.zonals=="zones" && this.zonals!=null){

        this.val=document.getElementById("zonalss");
        const newval1=this.val.querySelector('option[value="zones"]');
        newval1.selected=true;

        this.desc=document.getElementById("desc");
        const newval2=this.desc.querySelector('option[value="desc"]');
        newval2.selected=true;

      }

    }
    else if(this.zonals=="zones" || this.zonals==""){
      alert("Please enter the zonals");

      this.description="desc";

      if(this.description=="desc" && this.description!=null){
        this.desc=document.getElementById("desc");
        const newval=this.desc.querySelector('option[value="desc"]');
        newval.selected=true;
      }
    }
    else{
      this.description=event.target.value;
    }
    
  }

  onstatus(event:any){
    if(this.year==0){

      this.zonals="zones";
      this.description="desc";
      this.status="status";

      alert("Please enter the year");

      if(this.zonals=="zones" && this.zonals!=null){

        this.val=document.getElementById("zonalss");
        const newval1=this.val.querySelector('option[value="zones"]');
        newval1.selected=true;

        this.desc=document.getElementById("desc");
        const newval2=this.desc.querySelector('option[value="desc"]');
        newval2.selected=true;

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

      }

    }

    else if(this.zonals=="zones" || this.zonals==""){
      alert("Please enter the zonals");

      this.description="desc";
      this.status="status";

      if(this.description=="desc" && this.description!=null){

        this.desc=document.getElementById("desc");
        const newval=this.desc.querySelector('option[value="desc"]');
        newval.selected=true;

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

      }
    }

    else if(this.description=="desc" || this.description==""){
      alert("Please enter the description");

      this.status="status";

      if(this.status=="status" && this.status!=null){

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

      }

    }
    else{
      this.status=event.target.value;
      console.log(this.status);
    }
    
  }

  onbuildyear(event:any){



    if(this.year==0){

      this.zonals="zones";
      this.description="desc";
      this.status="status";
      this.buildyear=0;

      alert("Please enter the year");

      if(this.zonals=="zones" && this.zonals!=null){

        this.val=document.getElementById("zonalss");
        const newval1=this.val.querySelector('option[value="zones"]');
        newval1.selected=true;

        this.desc=document.getElementById("desc");
        const newval2=this.desc.querySelector('option[value="desc"]');
        newval2.selected=true;

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

        this.build=document.getElementById("buildyear");
        this.build.value=0;

        console.log(this.build);
      }

    }

    else if(this.zonals=="zones" || this.zonals==""){
      alert("Please enter the zonals");

      this.description="desc";
      this.status="status";
      this.buildyear=0;

      if(this.description=="desc" && this.description!=null){

        this.desc=document.getElementById("desc");
        const newval=this.desc.querySelector('option[value="desc"]');
        newval.selected=true;

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

        this.build=document.getElementById("buildyear");
        this.build.value=0;

      }
    }

    else if(this.description=="desc" || this.description==""){
      alert("Please enter the description");

      this.status="status";
      this.buildyear=0;

      if(this.status=="status" && this.status!=null){

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

        this.build=document.getElementById("buildyear");
        this.build.value=0;

      }

    }
    else if(this.status=="status" || this.status==""){
      alert("Please enter the Status");
      this.buildyear=0;

      this.build=document.getElementById("buildyear");
      this.build.value=0;

    }
    else{
      this.buildyear=event.target.value;
      console.log(this.buildyear);
    }
    
    console.log(this.buildyear);

  }

  onbuildarea(event:any){

    // if(this.year==0){
    //   alert("Please enter the year");
    // }
    // else if(this.description==""){
    //   alert("Please enter the description");
    // }
    // else if(this.zonals==""){
    //   alert("Please enter the zone");
    // }
    // else if(this.status==""){
    //   alert("Please enter the status");
    // }
    // else if(this.buildyear==0){
    //   alert("Please enter the build year");
    // }


    if(this.year==0){

      this.zonals="zones";
      this.description="desc";
      this.status="status";
      this.buildyear=0;
      this.buildarea=0;

      alert("Please enter the year");

      if(this.zonals=="zones" && this.zonals!=null){

        this.val=document.getElementById("zonalss");
        const newval1=this.val.querySelector('option[value="zones"]');
        newval1.selected=true;

        this.desc=document.getElementById("desc");
        const newval2=this.desc.querySelector('option[value="desc"]');
        newval2.selected=true;

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

        this.build=document.getElementById("buildyear");
        this.build.value=0;

        this.area=document.getElementById("buildarea");
        this.area.value=0;

        console.log(this.build);
      }

    }

    else if(this.zonals=="zones" || this.zonals==""){
      alert("Please enter the zonals");

      this.description="desc";
      this.status="status";
      this.buildyear=0;
      this.buildarea=0;

      if(this.description=="desc" && this.description!=null){

        this.desc=document.getElementById("desc");
        const newval=this.desc.querySelector('option[value="desc"]');
        newval.selected=true;

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

        this.build=document.getElementById("buildyear");
        this.build.value=0;

        this.area=document.getElementById("buildarea");
        this.area.value=0;

      }
    }

    else if(this.description=="desc" || this.description==""){
      alert("Please enter the description");

      this.status="status";
      this.buildyear=0;
      this.buildarea=0;

      if(this.status=="status" && this.status!=null){

        this.stat=document.getElementById("status");
        const newval3=this.stat.querySelector('option[value="status"]');
        newval3.selected=true;

        this.build=document.getElementById("buildyear");
        this.build.value=0;

        this.area=document.getElementById("buildarea");
        this.area.value=0;

      }

    }
    else if(this.status=="status" || this.status==""){
      alert("Please enter the Status");
      this.buildyear=0;
      this.buildarea=0;

      this.build=document.getElementById("buildyear");
      this.build.value=0;

      this.area=document.getElementById("buildarea");
      this.area.value=0;

    }

    else if(this.buildyear==0){

      alert("Please Enter the build year");

      this.buildarea=0;

      this.area=document.getElementById("buildarea");
      this.area.value=0;

    }
    
    else{
      this.buildarea=event.target.value;
      console.log(this.buildarea);
    }

    if(this.buildarea!=null){
      this.postPropertyForm();
    }
  }
}
