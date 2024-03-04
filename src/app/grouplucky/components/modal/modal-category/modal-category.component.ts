import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/core';
import { CategoryI } from 'src/app/core/src/models/category/category.model';
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
    @Inject(MAT_DIALOG_DATA) public datosCategory: CategoryI,
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

    if(this.datosCategory != null){
      this.tituloAccion = "Editar";
      this.botonAccion ="Actualizar"
    }
  }

  ngOnInit(): void {
    if(this.datosCategory != null){
      this.formularioCategory.patchValue({
        name : this.datosCategory.name,
        description : this.datosCategory.description
      })
    }
  }


  saveCategory(){

    const _category :CategoryI = {
      id : this.datosCategory == null ? 0  : this.datosCategory.id,
      name : this.formularioCategory.value.name,
      description : this.formularioCategory.value.description
    }

    if(this.datosCategory == null){
      this._categoryService.createCategory(_category).subscribe({
        next:(data : any) => {
            if(data.success){
              this._utilitiesService.mostrarAlerta("La categoria fue agregado con exito","Exito");
              this.modalActual.close("true");
            }
            else{
              this._utilitiesService.mostrarAlerta("Error al agregar una categoria","Error");
            }
        },
        error : (e) => {}
      })
    }else{
      this._categoryService.updateCategory(_category).subscribe({
        next :(data : any) => {
          if(data){
            this._utilitiesService.mostrarAlerta("La categoria fue editada","Exito");
            this.modalActual.close("true") //cerrar y enviar una informacion alboton que abrio el modal
          }
          else{
            this._utilitiesService.mostrarAlerta("No se pudo editar la categoria","Error");
          }
        },
        error :(e) => {}
      })
    }

  }


}
