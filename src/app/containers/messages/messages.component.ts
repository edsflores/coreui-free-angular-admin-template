import { MessageBody, MessageType } from '../../_models/message-body';
import { Component } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  private error = new BehaviorSubject<MessageBody | null>(null);

  visible = true;
  dismissible = true;


  public addError(message: string, type : MessageType){
    this.error.next({message, type});
1  }

}
