import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUserComponent } from './app-user.component';

const routes: Routes = [
  { path: 'users',  component: AppUserComponent,data: { breadcrumb: 'App Users'}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule { }
