import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgHomeComponent } from './org-home/org-home.component';
import { OrgInfoComponent } from './org-info/org-info.component';
import { OrgMainComponent } from './org-main/org-main.component';
import { RouterModule, Routes } from '@angular/router';
import { OrgDetailComponent } from './org-detail/org-detail.component';
import { SharedModule } from '../shared/shared.module';


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
    SharedModule,                 //remove shared module and you will get better idea about how shared module works 
    RouterModule.forChild(routes)   //forChild is used for feature module routes
  ],
  exports:[
    RouterModule,
    OrgInfoComponent,
    OrgHomeComponent,
    OrgMainComponent,
    OrgDetailComponent
  ]
})
export class OrganizationModule { }
