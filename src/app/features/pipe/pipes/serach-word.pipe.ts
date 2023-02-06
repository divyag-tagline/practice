import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachWord',
})
export class SerachWordPipe implements PipeTransform {
  transform(list: any[], serchWords: any, searchBy: string): any {
    if (!serchWords) {
      return list;
    }
    //only array of string :
    // const regex = new RegExp(serchWords, 'gi');
    // const obj = list.toString().replace(regex, `<b>${serchWords}</b>`);
    // console.log('obj :>> ', obj);
    // list = obj.split('.,');
    // return list.filter((data:any)=>{
    //   return data.toLowerCase().includes(serchWords.trim().toLowerCase());
    // })
    // when there is partial or full match of the search term
    const data = list.filter((line: any) => {
      console.log('list :>> ', list);
      const regex = new RegExp(serchWords, 'gi');
      const obj = line.name.replaceAll(regex, `<b>${serchWords}</b>`);
      return line.name = obj;
    });

    console.log('data :>> ', data);
    return data;
  }
}
