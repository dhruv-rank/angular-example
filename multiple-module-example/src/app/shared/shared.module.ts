import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components= [ HeaderComponent,
  FooterComponent,
  AppHomeComponent]


@NgModule({
  declarations: [                     //reusable components, pipes, and directives
    ...components                    //that we are going to use in whole application
  ],
  imports: [  
    CommonModule,
    FormsModule,
    ReactiveFormsModule               //In which feature of application we want these pre-built modules we can simply impport this module it in  that fearture's module
  ],
  exports:[
    ...components                   //export them so we can use these components where we import this module
  ]
})
export class SharedModule { }
