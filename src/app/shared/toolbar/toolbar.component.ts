import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }
  mostrarSidebar = true;
  ngOnInit(): void {
  }
  toggleSidebar() {
    console.log('mostrando!')
    this.mostrarSidebar = !this.mostrarSidebar;
  }
  displayedColumns: string[] = ['column1', 'column2', 'actions'];
  dataSource = [
    { column1: 'Dato 1-1', column2: 'Dato 1-2' },
    { column1: 'Dato 2-1', column2: 'Dato 2-2' },
    { column1: 'Dato 3-1', column2: 'Dato 3-2' }
  ];

}
