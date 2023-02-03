import { Component, OnInit } from '@angular/core';
import '@angular/common/locales/global/fr';
export interface Person {
  name: string;
  age: number;
  country: string;
}
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  today: number = Date.now();
  a: number = 0.259;
  b: number = 1.3495;
  pi: number = 3.14159265359;
  x: number = 0.259;
  y: number = 1.3495;
  people: Person[] = [];
  searchTerm!: string;
  names = [
    'Maverick',
    'Stanislav',
    'Arxero',
    'Feruchio',
    'Mavericus',
    'Arxiour',
  ];
  filterParagraph !: string;

  constructor() {
    this.names.forEach((e, i) =>
      this.people.push({
        name: e,
        age: i + 20,
        country: 'Bulgaria',
      })
    );
  }

  ngOnInit(): void {
    console.log('isworking?');
  }
}
