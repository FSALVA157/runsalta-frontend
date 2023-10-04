import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app.layout.component';
import { ListaLegajosComponent } from '../legajos/pages/lista-legajos/lista-legajos.component';
import { EquipostComponent } from '../equipost/equipost.component';

const routes: Routes = [
  { path: '', 
    component: AppLayoutComponent,
    children: [
    {path: 'equipos', component: EquipostComponent},

    {path: 'legajos', loadChildren: () => import('../legajos/legajos.module').then(m => m.LegajosModule)},
    { path: 'equipos', loadChildren: () => import('../equipost/equipost.module').then(m => m.EquipostModule)},
    { path: 'servicios', loadChildren: () => import('../serviciosl/serviciosl.module').then(m => m.ServicioslModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
