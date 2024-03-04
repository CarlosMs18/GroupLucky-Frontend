import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalCategoryComponent } from '../modal-category/modal-category.component';
import { CategoryI } from 'src/app/core/src/models/category/category.model';
import { CategoriesService } from 'src/app/core';
import { UtilitiesService } from 'src/app/core/src/services/public/utilities.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  category!: CategoryI;
  constructor(
    private modalActual : MatDialogRef<ModalCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public datosCategory : CategoryI,
    private _categoryService : CategoriesService,
    private _utilitiesService : UtilitiesService
  ){

  }

  ngOnInit(): void {
    this.category = this.datosCategory
    console.log(this.category)
  }

  back(){
    this.modalActual.close("true");
  }

}
