import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsInfoComponent } from './js-info/js-info.component';
import { JsHomeComponent } from './js-home/js-home.component';
import { JsMainComponent } from './js-main/js-main.component';
import { RouterModule } from '@angular/router';
import { JobSeekerRoutingModule } from './job-sekeer-routing.module';


// feature module 

@NgModule({
  declarations: [     //declare components,directives,pipes here which are specific to this feature module   
    JsInfoComponent,      
    JsHomeComponent, 
     JsMainComponent       
  ],
  imports: [
    CommonModule,
    RouterModule,
    JobSeekerRoutingModule
  ],
  exports:[       //provide the declared component,directives,pipes to module which has imported this feature module(JobSeekerModule)
    JsInfoComponent,      
    JsHomeComponent,
    JsMainComponent      
  ],
})
export class JobSeekerModule { }
