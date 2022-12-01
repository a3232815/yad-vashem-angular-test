import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {
  isOpen:boolean=false; //Saves whether the menu is open or closed
  constructor() { }

  ngOnInit(): void {
  }
  open(){
    //Open the menue
    this.isOpen=true;
  }
  close(){
    //Close the menue
    this.isOpen=false;
  }
}
