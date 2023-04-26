import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {
  Cols,
  CommonServiceService,
  Details,
} from '../service/common-service.service';
@Component({
  selector: 'app-common',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  @Input() details!: Details[];
  @Input() cols!: Cols[];

  constructor() {}

  ngOnInit(): void {}
}
