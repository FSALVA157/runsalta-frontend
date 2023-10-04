import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLegajosComponent } from './pages/lista-legajos/lista-legajos.component';

const routes: Routes = [
  {path: '', component: ListaLegajosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegajosRoutingModule { 

}
