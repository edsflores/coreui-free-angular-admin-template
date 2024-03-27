import { MessageBody, MessageType } from '../../_models/message-body';
import { Component, OnInit } from '@angular/core';

import { MessageService } from './messages.service';

import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit {
  constructor(private messageService : MessageService ) { }


  errorMessage: string = ""
  color: string = "";
  visible = false;
  dismissible = true;

  ngOnInit(): void {
    this.messageService.getError().pipe(
      tap(b  => {
        b === null ? this.errorMessage = "" : this.errorMessage = b?.message;
        if(this.errorMessage !== "" ) {
          this.visible = true;
          if (b === null || b === undefined) {
            this.color = ""
          }  else if (b?.type === MessageType.ERROR) {
            this.color = "danger";
          } else if (b.type === MessageType.WARNING) {
            this.color = "warning";
          } else if (b.type === MessageType.OK) {
            this.color = "success";
          }
        }
      })).subscribe();
  }




}
