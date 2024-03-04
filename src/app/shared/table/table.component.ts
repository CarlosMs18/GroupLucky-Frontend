import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataSource!: any[];
  displayedColumns: string[] = ['column1', 'column2', 'actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
