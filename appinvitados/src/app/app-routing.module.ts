import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './guest/list/list.component';
import { NavAppComponent } from './nav-app/nav-app.component';

const routes: Routes = [
  { 
    path: 'list', component: ListComponent 
  },
  { 
    path: '', redirectTo: 'list',  pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
