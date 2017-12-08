import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  inactiveCount:number=0;
  activeCount:number=0;

  constructor() { }

}
