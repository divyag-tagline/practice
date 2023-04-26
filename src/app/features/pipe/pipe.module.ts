import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipe/pipes/filter.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';
import { SerachWordPipe } from './pipes/serach-word.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CommonComponent } from 'src/app/shared/common/common.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PipesComponent,
    FilterPipe,
    FilterPipePipe,
    SerachWordPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    PipeRoutingModule,
    FormsModule,
    CommonComponent,
    HttpClientModule
  ]
})
export class PipeModule { }
