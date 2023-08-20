import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaLegajosComponent } from './pages/lista-legajos/lista-legajos.component';
import { LegajosRoutingModule } from './legajos-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AddLegajoFormComponent } from './components/add-legajo-form/add-legajo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { EditLegajoTabComponent } from './components/edit-legajo-tab/edit-legajo-tab.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ListaLegajosComponent,
    AddLegajoFormComponent,
    EditLegajoTabComponent
  ],
  imports: [
    CommonModule,
    LegajosRoutingModule,    
    PrimeNgModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessagesModule,
		MessageModule,
    SharedModule
  ]
})
export class LegajosModule { }
