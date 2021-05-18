import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppHomeComponent } from './shared/app-home/app-home.component';
import { CustomLoadModuleStrategyService } from './custom-load-module-strategy.service';

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
      { preloadingStrategy: CustomLoadModuleStrategyService } //this will load all the lazyloaded modules in background
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
