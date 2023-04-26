import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from 'src/app/shared/common/common.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:PipesComponent
  // },
  // {
  //   path:'common',
  //   component:CommonComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
