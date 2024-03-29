import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { SearchFieldComponent } from './search-field/search-field.component';
import { TableComponent } from './table/table.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent,
    SearchFieldComponent,
    TableComponent,
    NavListComponent
  ],
  exports:[
    ToolbarComponent,
    SearchFieldComponent,
    TableComponent,
    NavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
