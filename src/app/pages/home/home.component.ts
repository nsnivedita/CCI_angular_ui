import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayData:boolean;
  displayData1:boolean;
  displayData2:boolean;


  constructor() { }

  ngOnInit() {
    this.displayData=false;
    this.displayData1=false;
    this.displayData2=false;
  }

  dropDown(){
    this.displayData=!this.displayData;
    this.displayData1=false;
    this.displayData2=false;


  }
  dropDown1(){
    this.displayData1=!this.displayData1;
    this.displayData=false;
    this.displayData2=false;


  }
  dropDown2(){
    this.displayData2=!this.displayData2;
    this.displayData=false;
    this.displayData1=false;


  }

}
