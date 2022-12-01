import { TestimonyService} from '../../services/testimony-s.service.service';
import { Component, OnInit } from '@angular/core';
import {Testimony} from '../../models/Testimony';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  arr: Testimony[] = [];//Array of all testimonies
  constructor(public testimonyService:TestimonyService) { 
    // Gets the testimonies array from the service.
    this.testimonyService.getAllTestimony().subscribe((succes)=>{
      console.log(succes);
      this.arr=succes;
    },
    (err)=>{
      console.log("error get all testimonies");
      console.log(err);
    })
  }

  ngOnInit(): void {
  }
  //send tht testimony to show in testimony-template component
  sendI(t:Testimony){
    console.log(t);
    this.testimonyService.testimonyShow.next(t);
  }
}


