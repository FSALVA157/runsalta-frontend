import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {

  @Input()
  isVisible: boolean = false;
  @Input()
  header: string = '';
  @Input()
  message: string = '';
  @Input()
  success: boolean = true;

  

}
