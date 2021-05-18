import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { UIButtonComponent } from './uibutton/uibutton.component';

@NgModule({
  declarations: [
    UIButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // this is for bootstraping component 
  entryComponents: [UIButtonComponent]
})
//DoBootstrap inteface for bootstarping our web-component
export class AppModule implements DoBootstrap { 

  constructor(private injector: Injector) {
    //create custom element on bootsrap of this module
    //also provide injector for 
    const webComponent = createCustomElement(UIButtonComponent, {injector});
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap(){}
}
