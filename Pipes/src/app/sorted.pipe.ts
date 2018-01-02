import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted',
  pure:false
})
export class SortedPipe implements PipeTransform {

  transform(value: any, propName:string): any {
      return value.sort((a,b)=>{
       if(a[propName]>b[propName])
       return 1;
       else if(a[propName]<b[propName])
       return -1;
       else return 0;
      })
  }

}
