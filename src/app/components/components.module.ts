import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BreadcrumbModule} from 'angular-crumbs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent
    ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  entryComponents:[
  ]
})
export class ComponentsModule { }
