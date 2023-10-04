import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioslComponent } from './serviciosl.component';

const routes: Routes = [{ path: '', component: ServicioslComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioslRoutingModule { }
