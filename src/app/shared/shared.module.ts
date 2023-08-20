import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [  
    MessageModalComponent
  ],
  imports: [
    PrimeNgModule,
    CommonModule,
    MessageModule,
    MessagesModule
  ],
  exports: [
    MessageModalComponent
  ]
})
export class SharedModule { }
