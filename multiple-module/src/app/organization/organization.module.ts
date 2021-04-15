import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgHomeComponent } from './org-home/org-home.component';
import { OrgInfoComponent } from './org-info/org-info.component';
import { OrgMainComponent } from './org-main/org-main.component';
import { RouterModule, Routes } from '@angular/router';
import { OrgDetailComponent } from './org-detail/org-detail.component';


const routes: Routes = [
  {path: '' ,component: OrgMainComponent,children:[
    {path: 'home' ,component: OrgHomeComponent},
    {path: 'info', component:OrgInfoComponent}
  ]}
];



@NgModule({
  declarations: [
    OrgInfoComponent,
    OrgHomeComponent,
    OrgMainComponent,
    OrgDetailComponent
  ],
  imports: [
    CommonModule,
  RouterModule.forChild(routes)   //forChild is used for feature module routes
  ],
  exports:[
    OrgInfoComponent,
    OrgHomeComponent,
    OrgMainComponent,
    OrgDetailComponent
  ]
})
export class OrganizationModule { }