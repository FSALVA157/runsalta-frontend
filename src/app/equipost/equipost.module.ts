import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipostRoutingModule } from './equipost-routing.module';
import { EquipostComponent } from './equipost.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EquipostComponent
  ],
  imports: [
    CommonModule,
    EquipostRoutingModule,
    HttpClientModule  ]
})
export class EquipostModule { }
