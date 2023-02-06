import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachWord',
})
export class SerachWordPipe implements PipeTransform {
  transform(list: any[], serchWords: any, type: string): any {
    if (!serchWords) {
      return list;
    }

    return list
      .filter((line: any) => {
        return line[`${type}`].toLowerCase().includes(serchWords.toLowerCase());
      })
      .map((line: any) => {
        const regex = new RegExp(serchWords, 'gi');
        const match = line.name.match(regex);
        return {
          ...line,
          [`${type}`]: line.name.replace(regex, `<b>${match[0]}</b>`),
        };
      });
  }
}
