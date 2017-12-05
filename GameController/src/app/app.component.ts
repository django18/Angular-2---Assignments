import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  onIntervalFired(count)
  {
    console.log(count);
    if(count%2==0)
    this.evenNumbers.push(count);
    else this.oddNumbers.push(count);
  }
}
