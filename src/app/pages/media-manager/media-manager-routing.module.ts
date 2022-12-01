import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaManagerDetailsComponent } from './media-manager-details/media-manager-details.component';
import { MediaManagerListComponent } from './media-manager-list/media-manager-list.component';
import { MediaManagerComponent } from './media-manager.component';

const routes: Routes = [
  {
    path: 'media-manager', component: MediaManagerComponent, data: { breadcrumb: 'Media Manager' },
    children: [
      {path: '',component: MediaManagerListComponent},
      { path: 'create', component: MediaManagerDetailsComponent,data: { breadcrumb: 'Create' } },
      {
        path: ':id', component: MediaManagerDetailsComponent, data: { breadcrumb: 'Details' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaManagerRoutingModule { }
