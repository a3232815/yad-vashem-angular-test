import { Testimony } from '../../models/Testimony';
import { Component, OnInit } from '@angular/core';
import { TestimonyService } from 'src/app/services/testimony-s.service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-testimony-template',
  templateUrl: './testimony-template.component.html',
  styleUrls: ['./testimony-template.component.scss']
})
export class TestimonyTemplateComponent implements OnInit {
  get urlSafe(){
    //Return url string 
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.OneTestimony.url)
  }
  constructor(public testimonyService:TestimonyService, public sanitizer: DomSanitizer) { }
  OneTestimony:Testimony;//The testimony presented in this component
  hasTemplate:boolean=false; //Does the guard have any testimony to show?
  getSanitizedURL(){
    return "https://www.youtube.com/watch?v=xWSQcdaqMEE";
  }
  ngOnInit(): void {
    //Sign up to receive the testimonials shown in this component
    this.testimonyService.testimonyShow.subscribe((secc:any)=>{
      console.log(secc);
      this.OneTestimony=secc;
      this.hasTemplate=true;
    },
    (err:any)=>{
      console.log("error get the testimony to show");
      console.log(err);
    });
  }
}
