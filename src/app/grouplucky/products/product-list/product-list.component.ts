import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre del Producto', 'Stock Mínimo', 'Stock Máximo', 'Precio de Venta', 'Categoría', 'Estado', 'Acciones'];
  constructor() { }

  ngOnInit(): void {
  }

}
