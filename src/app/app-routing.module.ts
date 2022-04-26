import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
  },
    {
    path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
  },
  {
    path: 'third', loadChildren: () => import('./third/third.module').then(m => m.ThirdModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
