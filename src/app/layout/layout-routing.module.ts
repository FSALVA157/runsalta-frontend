import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app.layout.component';

const routes: Routes = [
  // {path:"", component: AppLayoutComponent},
  {path: 'legajos', loadChildren: () => import('../legajos/legajos.module').then(m => m.LegajosModule)},
  { path: 'equipost', loadChildren: () => import('../equipost/equipost.module').then(m => m.EquipostModule) }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
