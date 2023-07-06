import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  "firstname":string;
   "lastname":string;
        "dob":string;
  constructor() {
    this.firstname="sam",
    this.lastname="sundar",
    this.dob="14/01/2001"
   }

  ngOnInit(): void {
  }
  sayHello(){
    alert(`I am ${this.firstname}`);
  }
 
  
}
