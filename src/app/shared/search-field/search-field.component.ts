import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchTerm = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
