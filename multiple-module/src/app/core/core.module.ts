import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],       
  imports: [
    CommonModule,
    HttpClientModule, // these are the modules which we are going to use all over the application and it needs to import only once for whole application
                      // so it is better to use in the core module(we can also import them into shared module)
  ],
})
export class CoreModule {} // this module must be imported once and only in app module
