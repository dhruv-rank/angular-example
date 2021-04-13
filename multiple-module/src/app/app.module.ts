import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationModule } from './organization/organization.module';
import { JobSeekerModule } from './job-seeker/job-seeker.module';
import { AppHomeComponent } from './app-home/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganizationModule,    //imported in parent module     //all the exports of this feature module can be now use in this current module
    JobSeekerModule,      //imported in parent module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
