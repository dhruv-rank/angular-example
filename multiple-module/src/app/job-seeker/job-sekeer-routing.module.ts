import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JsHomeComponent } from "./js-home/js-home.component";
import { JsInfoComponent } from "./js-info/js-info.component";
import { JsMainComponent } from "./js-main/js-main.component";


const routes: Routes = [
    {path: '' ,component: JsMainComponent,children:[
        {path: 'home' ,component: JsHomeComponent},
        {path: 'info', component:JsInfoComponent}
      ]}
  ];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: []
})
export class JobSeekerRoutingModule{

}