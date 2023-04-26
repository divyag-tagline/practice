import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext'
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {KeyFilterModule} from 'primeng/keyfilter'
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule,PasswordModule,DividerModule,KeyFilterModule,InputTextModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() lastName!:FormControlName ;
  constructor() { 
    console.log('this.lastName :>> ', this.lastName);
  }

  ngOnInit(): void {
  }

}
