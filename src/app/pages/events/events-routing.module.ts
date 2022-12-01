import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';

const routes: Routes = [
  {
    path: 'events', component: EventsComponent,data: { breadcrumb: 'Approve Events' },
    children: [
      {path: '',component: EventsListComponent},
      { path: ':id/view', component: EventsDetailsComponent, data: { breadcrumb: 'View Detail' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
