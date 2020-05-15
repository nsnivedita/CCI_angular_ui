import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  displayData:boolean;

  constructor() { }

  ngOnInit() {
    this.displayData=false;
  }

  dropDown(){
    this.displayData=!this.displayData;

  }

}
