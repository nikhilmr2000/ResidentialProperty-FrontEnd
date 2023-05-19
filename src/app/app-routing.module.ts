import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddzoneComponent } from './addzone/addzone.component';
import { HomeComponent } from './home/home.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { ZonalreportComponent } from './zonalreport/zonalreport.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'propertyform',component:PropertyformComponent},
  {path:'zonalreport',component:ZonalreportComponent},
  {path:'addzone',component:AddzoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
