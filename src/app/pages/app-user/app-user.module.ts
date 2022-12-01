import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUserRoutingModule } from './app-user-routing.module';
import { AppUserComponent } from './app-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppUserComponent],
  imports: [
    CommonModule,
    AppUserRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppUserModule { }
