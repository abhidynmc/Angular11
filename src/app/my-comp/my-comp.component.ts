import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  ifError:boolean = false;
  myStyle={
    'background-color':'yellow',
    'color':this.ifError? 'red' :'blue',
    'font-weight':'bold'
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
