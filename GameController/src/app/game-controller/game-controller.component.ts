import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  counter:number=0;
  interval=null;
  @Output() emitInterval=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  startCounter()
  {    
    this.interval=setInterval(()=>{
      this.emitInterval.emit(this.counter+1);
      this.counter++;
    },1000);
  }

  stopCounter()
  {
    if(this.interval!=null)
    clearInterval(this.interval);
  }



}
