import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  myvar="myClass";
  isStyleActive:boolean = true;
  isSpecialActive:boolean = true;
  isFontActive: boolean =false;
  isColorActive : boolean = true;
  styleCheck={
    specialClass:this.isSpecialActive,
    fontClass: this.isFontActive,
    colorClass: this.isColorActive
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
