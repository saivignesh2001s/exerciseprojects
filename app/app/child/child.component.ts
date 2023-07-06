import { Component,OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message?:string;
  @Output() notify:EventEmitter<string>=new EventEmitter<string>();
  name:string;

  constructor() {
    this.name="i am saivignesh";
   }

  ngOnInit(): void {
  }
  triggerCustomEvent(){
    this.notify.emit("message passed");
  }

}
