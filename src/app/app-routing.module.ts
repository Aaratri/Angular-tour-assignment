import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, //default route
   {  path: 'heroes', component: HeroesComponent},
   { path:'dashboard', component: DashboardComponent},
   {path:'detail/:id', component:HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //RouterModule makes router directives available for use in th AppModule Component that will be need them
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
