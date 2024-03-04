import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupluckyComponent } from './grouplucky.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component: GroupluckyComponent,
    children : [
      {
        path:'categoryList',
        component : CategoryListComponent
      },
      {
        path :'productList',
        component :ProductListComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupLuckyRoutingModule{ }
