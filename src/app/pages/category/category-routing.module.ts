import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  {
    path: 'category', component: CategoryComponent, data: { breadcrumb: 'Category' },
    children: [
      { path: '', component: CategoryListComponent },
      { path: 'create', component: CategoryDetailsComponent, data: { breadcrumb: 'Create' } }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
