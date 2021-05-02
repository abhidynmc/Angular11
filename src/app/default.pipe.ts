import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let returnVal='';
    if(value){
      returnVal=value;
    }else{
      returnVal=args[0];
    }
    return returnVal;
  }

}
