import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Testimony } from '../models/Testimony';

@Injectable({
  providedIn: 'root'
})

export class TestimonyService {
  testimonyShow=new Subject<Testimony>();
  getAllTestimony(){
    // Gets an array of all testimonies from the server
    return this.myHttpClient.get<Testimony[]>("https://localhost:44315/api/Testimony")
  }
  constructor(public myHttpClient:HttpClient) { }
}
