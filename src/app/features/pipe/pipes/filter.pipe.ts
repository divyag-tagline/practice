import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: any, searchBy: string) {
    // when our serach is undefined or null
    if (!searchTerm) {
      return items;
    }

    // when there is partial or full match of the search term
    return items
      .filter((item) => {
        return Object.values(item)
          .toString()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());
      })
      .map((line: any) => {
        console.log('line :>> ', line);
        console.log('object :>> ', Object.values(line).toString()
        .replace(new RegExp(`(${searchTerm})`, 'gi'), '<b>$1</b>'),);
        Object.keys(line).map((data:any) => {
          const ddd =  {
            [`${data}`]:this.replace(line,data,searchTerm)
          }
          console.log('ddd :>> ', ddd);
          return ddd
        })

        // return {
        //   country: line.country
        //     .toString()
        //     .replace(new RegExp(`(${searchTerm})`, 'gi'), '<b>$1</b>'),
        //   // age: this.replace(line, line.age, searchTerm),
        //   // country: this.replace(line, line.country, searchTerm),
        // };
      });
  }
  replace(str: any, value: any, regex: any) {
    return str[value].toString().replace(new RegExp(`(${regex})`, 'gi'), '<b>$1</b>');
  }
}
