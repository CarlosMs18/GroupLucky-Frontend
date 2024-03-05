import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouplucky',
  templateUrl: './grouplucky.component.html',
  styleUrls: ['./grouplucky.component.css']
})
export class GroupluckyComponent implements OnInit {
  mostrarSidebar = true;
  dataSource = [
    { column1: 'Dato 1-1', column2: 'Dato 1-2' },
    { column1: 'Dato 2-1', column2: 'Dato 2-2' },
    { column1: 'Dato 3-1', column2: 'Dato 3-2' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.mostrarSidebar = !this.mostrarSidebar;
  }

  performSearch(searchTerm: string) {

  }
}
