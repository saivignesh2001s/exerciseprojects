import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 result:string;
  constructor() {
    this.result="I am working in mphasis";
   }

  ngOnInit(): void {
  }
  getdata(result:string){
    this.result=result;
    alert(result);
  }

}
