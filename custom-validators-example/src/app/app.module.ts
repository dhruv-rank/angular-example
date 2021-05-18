import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempalteDrivenComponent } from './template-driven/tempalte-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CommonDirective } from './common.directive';
import { TemplateDrivenValidationDirective } from './template-driven/template-driven-validation.directive';
import { AsyncTemplateDrivenValidatorDirective } from './template-driven/async-template-driven-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TempalteDrivenComponent,
    ReactiveComponent,
    CommonDirective,
    TemplateDrivenValidationDirective,
    AsyncTemplateDrivenValidatorDirective
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
