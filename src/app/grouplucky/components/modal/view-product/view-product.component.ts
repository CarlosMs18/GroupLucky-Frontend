import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/core/src/models/product/product.model';
import { ModalProductComponent } from '../modal-product/modal-product.component';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product!: Product;
  constructor(
    private modalActual : MatDialogRef<ModalProductComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProduct: Product
  ) { }

  ngOnInit(): void {
    this.product = this.datosProduct;
  }

  back(){
    this.modalActual.close("true")
  }
}
