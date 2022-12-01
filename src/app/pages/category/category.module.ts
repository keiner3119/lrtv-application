import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryComponent, CategoryListComponent, CategoryDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
