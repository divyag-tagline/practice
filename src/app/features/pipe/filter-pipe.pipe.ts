import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(filterParagraph: string): any {
    return filterParagraph.length >= 50
    ?  filterParagraph.substring(0,50) + '...'
    : filterParagraph;
  }
}
