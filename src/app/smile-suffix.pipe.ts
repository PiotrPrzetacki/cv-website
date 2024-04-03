import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smileSuffix',
  standalone: true
})
export class SmileSuffixPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "😜";
  }

}
