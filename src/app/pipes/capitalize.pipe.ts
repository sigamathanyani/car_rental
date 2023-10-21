import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(word: string, ...args: unknown[]): unknown {
    if(word.length === 0){
      return;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);;
  }

}
