import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesService } from 'src/app/core';
import { GetCategoryAll } from 'src/app/core/src/models/category/getCategoryAll.model';
import { ModalCategoryComponent } from '../../components/modal/modal-category/modal-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name','description','acciones'];
  dataSource =new MatTableDataSource<GetCategoryAll>();

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private categoriesService : CategoriesService,
    private dialog : MatDialog

  ) { }

  ngOnInit(): void {
    this.getCategoryAll()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    }
  }

  getCategoryAll(){
    this.categoriesService.getCategoryAll()
      .subscribe((categories) => {
        this.dataSource.data = categories
        console.log(categories)
      })
  }
  AddCategory(){
    this.dialog.open(ModalCategoryComponent,{
      disableClose : true
    }).afterClosed().subscribe(response => {
      if(response == "true") this.getCategoryAll();
    })
  }
}
