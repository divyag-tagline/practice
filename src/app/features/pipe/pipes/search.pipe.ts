import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any[], regex: any, type: string): any {
    if (!regex) {
      return value;
    }
    return value
      .filter((line: any) => {
        return line[`${type}`].toLowerCase().includes(regex.toLowerCase());
      })
      .map((line: any) => {
        // return {
        //   ...line,
        //   [`${type}`]: line.name.replace(
        //     new RegExp(`(${regex})`, 'gi'),
        //     '<b>$1</b>'
        //   ),
        // };
        return this.sanitize(this.replace(line, regex));
      });
  }

  replace(str: any, regex: any) {
    return {
      name: str.name.replace(
        new RegExp(`(${regex})`, 'gi'),
        '<b>$1</b>'
      ),
    };
  }
  sanitize(str: any) {
    console.log('str :>> ', str.name);
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }
}
