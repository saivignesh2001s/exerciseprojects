import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})


 
export class PipesComponent implements OnInit {
  
  dateVal:Date=new Date();
  jsonVal:Object=new Object({"moo":"foo","goo":{"too":"new"}});
  result:string;
  maintain:string;
  constructor() { 
    this.result="I AM SAI";
    this.maintain="mphasis";
    
  }

  ngOnInit(): void {
  }

}
