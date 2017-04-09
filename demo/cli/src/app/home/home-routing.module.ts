import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalizeRouterModule } from '../../../../../src/localize-router.module';

const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
];

@NgModule({
  imports: [
    LocalizeRouterModule.forChild(homeRoutes),
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
