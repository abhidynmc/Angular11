import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  myText:string ="This is mytext";
  myInputText:string ="";
  
  constructor() { }

  changeText(){
    this.myText = "This is new";
  }
  changeEvent(event:any){
    console.log(event);
    console.log(event.srcElement.innerText);
    event.srcElement.innerText = "This Has been changed";
  }

  onKeyPressed(event:any){
    this.myInputText+=event.target.value + ' && ';
  }
  

  ngOnInit(): void {
  }

}
