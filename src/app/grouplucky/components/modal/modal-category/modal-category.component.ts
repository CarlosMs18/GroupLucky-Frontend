import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/core';
import { CategoryI } from 'src/app/core/src/models/category/category.model';
import { GetCategoryAll } from 'src/app/core/src/models/category/getCategoryAll.model';
import { UtilitiesService } from 'src/app/core/src/services/public/utilities.service';

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
    private _utilitiesService : UtilitiesService
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


  saveCategory(){

    const _category :CategoryI = {
      id : this.datosCategory == null ? 0  : this.datosCategory.id,
      name : this.formularioCategory.value.name,
      description : this.formularioCategory.value.description
    }
    this._categoryService.createCategory(_category).subscribe({
      next:(data : any) => {
          console.log(data)
          if(data.success){
            this._utilitiesService.mostrarAlerta("La categoria fue agregado con exito","Exito");
          }
          else{
            this._utilitiesService.mostrarAlerta("Error al agregar una categoria","Error");
          }
      },
      error : (e) => {}
    })
  }


}
