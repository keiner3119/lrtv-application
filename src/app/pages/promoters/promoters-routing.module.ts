import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotersComponent } from './promoters.component';
import { PromotersDetailsComponent } from './promoters-details/promoters-details.component';
import { PromotersListComponent } from './promoters-list/promoters-list.component';
import { PromotersEventsComponent } from './promoters-events/promoters-events.component';

const routes: Routes = [
  {
    path: 'promoters', component: PromotersComponent,data: { breadcrumb: 'Promoters' },
    children: [
      {path: '',component: PromotersListComponent},
      { path: 'create', component: PromotersDetailsComponent,data: { breadcrumb: 'Create' } },
      {
        path: ':id', component: PromotersDetailsComponent, data: { breadcrumb: 'Details' },
      },
      {
        path: ':id/events', component: PromotersEventsComponent, data: { breadcrumb: 'Events' },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotersRoutingModule { }
