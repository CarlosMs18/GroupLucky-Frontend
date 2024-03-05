import { CategoryI } from './../../../core/src/models/category/category.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesService } from 'src/app/core';
import { GetCategoryAll } from 'src/app/core/src/models/category/getCategoryAll.model';
import { ModalCategoryComponent } from '../../components/modal/modal-category/modal-category.component';
import Swal from 'sweetalert2';
import { ViewCategoryComponent } from '../../components/modal/view-category/view-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name','description','acciones'];
  dataInicio : CategoryI[] = [];
  dataSource = new MatTableDataSource<GetCategoryAll>();

  @ViewChild(MatPaginator) paginacionTabla! :MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private categoriesService : CategoriesService,
    private dialog : MatDialog

  ) { }

  ngOnInit(): void {
    this.getCategoryAll()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginacionTabla;
  }


  getCategoryAll(){
    this.categoriesService.getCategoryAll()
      .subscribe((categories) => {
        this.dataSource.data = categories
      })
  }
  AddCategory(){
    this.dialog.open(ModalCategoryComponent,{
      disableClose : true
    }).afterClosed().subscribe(response => {
      if(response == "true") this.getCategoryAll();
    })
  }

  editCategory(category: CategoryI){
    this.dialog.open(ModalCategoryComponent,{
      disableClose : true,
      data : category
    }).afterClosed().subscribe(resultado => {
      if(resultado == "true") this.getCategoryAll();
    });
  }

  viewCategory(category: CategoryI){
    this.dialog.open(ViewCategoryComponent,{
      disableClose : true,
      data : category
    }).afterClosed().subscribe(resultado => {
      if(resultado == "true") this.getCategoryAll();
    });
  }

  aplicarFiltroTabla(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
