import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterParagraph'
})
export class FilterParagraphPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
