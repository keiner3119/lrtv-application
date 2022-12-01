import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaManagerRoutingModule } from './media-manager-routing.module';
import { MediaManagerComponent } from './media-manager.component';
import { MediaManagerDetailsComponent } from './media-manager-details/media-manager-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaManagerListComponent } from './media-manager-list/media-manager-list.component';

@NgModule({
  declarations: [MediaManagerComponent, MediaManagerDetailsComponent, MediaManagerListComponent],
  imports: [
    CommonModule,
    MediaManagerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class MediaManagerModule { }
