import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchFieldComponent } from './search-field/search-field.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    SearchFieldComponent
  ],
  exports:[
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
