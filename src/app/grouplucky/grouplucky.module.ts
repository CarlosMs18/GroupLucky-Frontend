import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { GroupluckyComponent } from './grouplucky.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { GroupLuckyRoutingModule } from './grouplucky-routing.module';
import { ModalProductComponent } from './components/modal/modal-product/modal-product.component';
import { ModalCategoryComponent } from './components/modal/modal-category/modal-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCategoryComponent } from './components/modal/view-category/view-category.component';
import { ViewProductComponent } from './components/modal/view-product/view-product.component';




@NgModule({
  declarations: [
    CategoryListComponent,
    ProductListComponent,
    GroupluckyComponent,
    ModalProductComponent,
    ModalCategoryComponent,
    ViewCategoryComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    GroupLuckyRoutingModule
  ]
})
export class GroupluckyModule { }
