import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipostComponent } from './equipost.component';

const routes: Routes = [{ path: '', component: EquipostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipostRoutingModule { }
