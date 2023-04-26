import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentsInfoComponent } from './students-info/students-info.component';
import { CommonComponent } from 'src/app/shared/common/common.component';
import { InputComponent } from 'src/app/shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsInfoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CommonComponent,
    InputComponent,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
