import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  {path: '' ,component : AppHomeComponent},
  {path: 'js',loadChildren:'./job-seeker/job-seeker.module#JobSeekerModule'},
  {path: 'org', loadChildren: () => import('./organization/organization.module').then(e=> e.OrganizationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
