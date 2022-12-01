import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotersRoutingModule } from './promoters-routing.module';
import { PromotersComponent } from './promoters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromotersDetailsComponent } from './promoters-details/promoters-details.component';
import { PromotersListComponent } from './promoters-list/promoters-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromotersEventsComponent } from './promoters-events/promoters-events.component';


@NgModule({
  declarations: [PromotersComponent, PromotersDetailsComponent, PromotersListComponent, PromotersEventsComponent],
  imports: [
    CommonModule,
    PromotersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PromotersModule { }
