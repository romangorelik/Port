import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigoComponent } from './BigO/bigo/bigo.component';
import { HomeComponent } from './LandingPage/home/home.component';


const routes: Routes = [
  {path: 'big-o', component: BigoComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
