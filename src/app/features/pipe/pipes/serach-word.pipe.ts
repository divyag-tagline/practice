import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachWord',
})
export class SerachWordPipe implements PipeTransform {
  transform(list: any[], serchWords: any,type:string): any {
    if (!serchWords) {
      return list;
    }
    
    return list
      .filter((line: any) => {
        return line[`${type}`].toLowerCase().includes(serchWords.toLowerCase());
      })
      .map((line: any) => {
        const regex = new RegExp(serchWords, 'gi');
        
        return {
          ...line,
          [`${type}`]: line.name.replace(regex, function(serchWords :any) {
            if (serchWords.toUpperCase() === serchWords) {
                return `<b>${serchWords}</b>`.toUpperCase();
            } else if (serchWords[0].toUpperCase() === serchWords[0]) {
                return `<b>${serchWords}</b>`[0].toUpperCase() + `<b>${serchWords}</b>`.slice(1);
            } else {
                return `<b>${serchWords}</b>`;
            }
        }),
        };
      });
  }
}
