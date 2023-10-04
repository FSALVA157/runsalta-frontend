import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioslRoutingModule } from './serviciosl-routing.module';
import { ServicioslComponent } from './serviciosl.component';


@NgModule({
  declarations: [
    ServicioslComponent
  ],
  imports: [
    CommonModule,
    ServicioslRoutingModule
  ]
})
export class ServicioslModule { }
