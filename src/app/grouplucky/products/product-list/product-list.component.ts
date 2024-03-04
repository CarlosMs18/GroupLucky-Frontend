import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/core';
import { Product } from 'src/app/core/src/models/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 /*  displayedColumns: string[] = ['id','code','name', 'stockmin', 'stockmax', 'unitsalePrice', 'categoria', 'estado', 'Acciones']; */
  displayedColumns: string[] = ['id','code','name','stockMin','stockMax','unitSalePrice','categoria','estado','acciones']
  dataSource =new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _productService :ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductsAll();
  }

  getProductsAll(){
    this._productService.getProductAll().subscribe(products =>{
      console.log(products)
      this.dataSource.data = products
    })
  }

  addProduct(){

  }
}
