import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
