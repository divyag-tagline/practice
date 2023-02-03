import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(filterParagraph: string,length:number = 10): any {
    return filterParagraph.length >= length
    ?  filterParagraph.slice(0,length) + '...'
    : filterParagraph;
  }
}
