import { Component, OnInit } from '@angular/core';
import '@angular/common/locales/global/fr';
import { Observable } from 'rxjs';
export interface Person {
  name: string;
  age: number;
  country: string;
}

export interface Name {
  name: string;
}
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  today: number = Date.now();
  a: number = 0.259;
  b: number = 100.3495;
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
  serchWords!: string;
  name: any[] = [];
  listOfLine = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Suspendisse scelerisque lectus at velit varius, sed ullamcorper erat lobortis.',
    'Donec vitae sem ut orci blandit vehicula eu vel nisl.',
    'Integer euismod leo fermentum eros convallis condimentum a tincidunt purus.',
    'Etiam euismod felis id purus mollis, nec dapibus augue aliquam.',
    'Praesent vel sapien eget ipsum feugiat elementum.',
    'Fusce gravida felis in orci bibendum, nec viverra nisl elementum.',
    'Curabitur auctor justo sit amet risus dapibus, id facilisis mi mollis.',
    'Etiam ornare est ut felis sodales, et euismod enim molestie.',
    'Donec sagittis lacus a purus faucibus gravida.',
    'Suspendisse congue sapien sed iaculis molestie.',
  ];
  filterParagraph!: string;
  length: number = 10;

  time = new Observable<string>((observer) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor() {
    this.names.forEach((e, i) =>
      this.people.push({
        name: e,
        age: i + 20,
        country: 'Bulgaria',
      })
    );
    this.listOfLine.forEach((e) => this.name.push({ name: e, text: e }));
  }

  ngOnInit(): void {
    console.log('isworking?');
  }

  blockCharacter(e: any) {
    var x = e.which || e.keycode;
    if (x >= 42 && x <= 57) return true;
    else return false;
  }
}
