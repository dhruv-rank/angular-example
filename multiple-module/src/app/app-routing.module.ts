import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppHomeComponent } from './shared/app-home/app-home.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  {
    path: 'js',
    loadChildren: () =>
      import('./job-seeker/job-seeker.module').then((e) => e.JobSeekerModule),
  },
  {
    path: 'org',
    loadChildren: () =>
      import('./organization/organization.module').then(
        (e) => e.OrganizationModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules } //this will load all the lazyloaded modules in background
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
