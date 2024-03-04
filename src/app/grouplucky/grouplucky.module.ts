import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GroupluckyModule { }
