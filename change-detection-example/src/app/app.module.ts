import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterComponent } from './default/waiter/waiter.component';
import { ManagerComponent } from './default/manager/manager.component';
import { CustomerComponent } from './default/customer/customer.component';
import { CustomerOnpushComponent } from './onpush/customer-onpush/customer-onpush.component';
import { ManagerOnpushComponent } from './onpush/manager-onpush/manager-onpush.component';
import { WaiterOnpushComponent } from './onpush/waiter-onpush/waiter-onpush.component';

@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    ManagerComponent,
    CustomerComponent,
    CustomerOnpushComponent,
    ManagerOnpushComponent,
    WaiterOnpushComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
