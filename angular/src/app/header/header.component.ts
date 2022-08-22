// import { Component, EventEmitter, OnInit, Output } from '@angular/core'; // Related to first navigation approach
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  collapsed = true;
  // @Output() featureSelected = new EventEmitter<string>(); // Related to first navigation approach

  constructor() { }

  ngOnInit(): void {
  }

  // Related to first navigation approach
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature)
  // }

}
