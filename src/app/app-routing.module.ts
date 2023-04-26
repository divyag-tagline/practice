import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './shared/common/common.component';
import { HomeComponent } from './shared/home/home.component';
import { InputComponent } from './shared/input/input.component';

const routes: Routes = [
  // {
  //   path:'',
  //   loadChildren: () =>
  //     import('./features/pipe/pipe.module').then(
  //       (pipe) => pipe.PipeModule
  //     )
  // },
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
  // {
  //   path:'student',
  //   loadChildren: ()=>import('./features/student/student.module').then(student=>student.StudentModule)
  // },
  // {
  //   path:'input',
  //   component:InputComponent
  // },
  // // {
  // //   path:'common',
  // //   loadChildren: () => import('./shared/common/common.component').then(common=>common.CommonComponent)
  // // },
  // {
  //   path:'**',
  //   redirectTo:''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }