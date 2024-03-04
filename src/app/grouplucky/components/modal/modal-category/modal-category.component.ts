import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/core';
import { GetCategoryAll } from 'src/app/core/src/models/category/getCategoryAll.model';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.css']
})
export class ModalCategoryComponent implements OnInit {
  formularioCategory : FormGroup;

  tituloAccion:string = "Agregar";
  botonAccion:string = "Guardar";
  constructor(
    private modalActual : MatDialogRef<ModalCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public datosCategory: GetCategoryAll,
    private fb :FormBuilder,
    private _categoryService : CategoriesService,
  ) {
    this.formularioCategory = this.fb.group(
      {
        name : ["", Validators.required],
        description : ["", Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }


  saveProduct(){

  }


}
