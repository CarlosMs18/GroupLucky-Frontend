import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() mostrarSidebar!: boolean;
  @Output() toggleSidebar = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
