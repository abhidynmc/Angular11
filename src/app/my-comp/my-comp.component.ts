import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  public data: string="Hey There!";
  public animalName:string ='';
  public dateObj = new Date();
  public sampleJson={
    name:'Sam',
    age:45
  }
  constructor() { }

  ngOnInit(): void {
  }

}
