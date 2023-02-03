import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipe/pipes/filter.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    FilterPipe,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    PipeRoutingModule,
    FormsModule
  ]
})
export class PipeModule { }
