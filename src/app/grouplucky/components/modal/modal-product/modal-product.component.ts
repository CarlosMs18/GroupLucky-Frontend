import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriesService, ProductsService } from 'src/app/core';
import { CategoryI } from 'src/app/core/src/models/category/category.model';
import { CreateProduct } from 'src/app/core/src/models/product/create-product.model';
import { Product } from 'src/app/core/src/models/product/product.model';
import { UtilitiesService } from 'src/app/core/src/services/public/utilities.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit{
  formularioProducto  : FormGroup;

  tituloAccion:string = "Agregar";
  botonAccion:string = "Guardar";
  categoriesList : CategoryI[] = [];
  constructor(
    private modalActual : MatDialogRef<ModalProductComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProduct: Product,
    private fb :FormBuilder,
    private _productService : ProductsService,
    private _categoryService : CategoriesService,
    private _utilitiesService : UtilitiesService
  ) {
    this.formularioProducto = this.fb.group(
      {
        name : ["", Validators.required],
        code : ["", Validators.required],
        stockMin : [0,Validators.required],
        stockMax :[0,Validators.required],
        unitSalePrice : [0,Validators.required],
        categoria : ["",Validators.required]
      }
    )

    this._categoryService.getCategoryAll().subscribe(categories =>{
      this.categoriesList = categories
    });
  }

  ngOnInit(): void {
    if(this.datosProduct != null){
      this.formularioProducto.patchValue({
        name : this.datosProduct.productName,
        code : this.datosProduct.code,
        stockMin : this.datosProduct.stockMin,
        stockMax : this.datosProduct.stockMax,
        unitSalePrice : this.datosProduct.unitSalePrice,
        categoria : this.datosProduct.categoryId
      })
    }
  }

  saveProduct(){
    const _product : CreateProduct = {
       id : this.datosProduct == null ? 0 : this.datosProduct.id,
       name : this.formularioProducto.value.name,
       code : this.formularioProducto.value.code,
       stockMin : this.formularioProducto.value.stockMin,
       stockMax : this.formularioProducto.value.stockMax,
       unitSalePrice : this.formularioProducto.value.unitSalePrice,
       categoryId : this.formularioProducto.value.categoria
    }

    if(this.datosProduct == null){
      this._productService.createProduct(_product).subscribe({
        next:(data : any) => {
          if(data.success){
            this._utilitiesService.mostrarAlerta("El producto fue agregado con exito","Exito");
            this.modalActual.close("true");
          }
        }
      })
    }
    else{
      this._productService.updateProduct(_product).subscribe({
        next :(data : any) => {
          if(data){
            this._utilitiesService.mostrarAlerta("El producto fue editada","Exito");
            this.modalActual.close("true") //cerrar y enviar una informacion alboton que abrio el modal
          }
          else{
            this._utilitiesService.mostrarAlerta("No se pudo editar el producto","Error");
          }
        },
        error :(e) => {}
      })

    }
  }
}
