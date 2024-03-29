import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/core';
import { Product } from 'src/app/core/src/models/product/product.model';
import { ModalProductComponent } from '../../components/modal/modal-product/modal-product.component';
import Swal from 'sweetalert2';
import { UtilitiesService } from 'src/app/core/src/services/public/utilities.service';
import { ViewProductComponent } from '../../components/modal/view-product/view-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id','code','name','stockMin','stockMax','unitSalePrice','categoria','estado','acciones']
  dataSource =new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginacionTabla! :MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _productService :ProductsService,
    private dialog : MatDialog,
    private _utilitiesService : UtilitiesService
  ) { }

  ngOnInit(): void {
    this.getProductsAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginacionTabla;
  }

  getProductsAll(){
    this._productService.getProductAll().subscribe(products =>{

      this.dataSource.data = products
      if(this.dataSource.data.length > 0){
        this.paginacionTabla._intl.itemsPerPageLabel = "Productos por página"
      }
    })
  }

  addProduct(){
    this.dialog.open(ModalProductComponent,{
      disableClose : true
    }).afterClosed().subscribe(response => {
      if(response == "true") this.getProductsAll();
    })
  }

  editProduct(product : Product){
    this.dialog.open(ModalProductComponent,{
      disableClose : true,
      data : product
    }).afterClosed().subscribe(resultado => {
      if(resultado == "true") this.getProductsAll();
    });
  }

  eliminarProducto(producto : Product){
    Swal.fire({
      title : '¿Desea eliminar el producto?',
      text : producto.productName,
      icon : 'warning',
      confirmButtonColor:'#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton:true,
      cancelButtonColor:'#d33',
      cancelButtonText :'No, volver'
    }).then((resultado) => {
      if(resultado.isConfirmed){
        this._productService.deleteProduc(producto.id).subscribe({
          next :(data) => {
            if(data){
              this._utilitiesService.mostrarAlerta("El producto fue eliminado","Listo!");
              this.getProductsAll();
            }
            else{
              this._utilitiesService.mostrarAlerta("No se pudo eliminar el producto","Error");
            }

          },
          error : (e) => {}
        })
      }
    })
  }

  viewProduct(product: Product){
    this.dialog.open(ViewProductComponent,{
      disableClose : true,
      data : product
    }).afterClosed().subscribe(response => {
      if(response == "true") this.getProductsAll();
    })
  }

  aplicarFiltroTabla(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
