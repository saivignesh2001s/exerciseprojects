import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num:number[]=[1,2,3,4,5,6,7,8,9,10]

}
