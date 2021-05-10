import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempalteDrivenComponent } from './template-driven/tempalte-driven.component';
import { CutomTemplateDirective } from './template-driven/cutom-template.directive';
import { ReactiveComponent } from './reactive/reactive.component';
import { CommonDirective } from './common.directive';

@NgModule({
  declarations: [
    AppComponent,
    TempalteDrivenComponent,
    CutomTemplateDirective,
    ReactiveComponent,
    CommonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
