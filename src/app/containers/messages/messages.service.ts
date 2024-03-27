import { MessageBody, MessageType } from './../../_models/message-body';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private error = new Subject<MessageBody>();

  constructor() { }

  public addError(message: string, type : MessageType){
    this.error.next({"message" : message, "type" : type});
  }

  public getError(): Observable<MessageBody> {
    return this.error.asObservable();
  }
}
