import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{LoginComponent} from './login/login.component';
import{HeroDetailComponent} from './hero-detail/hero-detail.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'}, //default route
   {path: 'login', component: LoginComponent},
   {  path: 'heroes', component: HeroesComponent},
   { path:'dashboard', component: DashboardComponent},
   {path:'detail/:id', component:HeroDetailComponent},
   {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //RouterModule makes router directives available for use in th AppModule Component that will be need them
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
