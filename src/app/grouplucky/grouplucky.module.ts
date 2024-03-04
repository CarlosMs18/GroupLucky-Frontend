import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { GroupluckyComponent } from './grouplucky.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { GroupLuckyRoutingModule } from './grouplucky-routing.module';



@NgModule({
  declarations: [
    CategoryListComponent,
    ProductListComponent,
    GroupluckyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    GroupLuckyRoutingModule
  ]
})
export class GroupluckyModule { }
