import { MessageBody } from './../_models/message-body';
import { MessageService } from './../containers/messages/messages.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthenticationService } from '../_services';
import { MessageType } from '../_models/message-body';

@Injectable()
export class MessageInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private messageService : MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
              if ((event instanceof HttpResponse) && (event.body?.message !== undefined)) {
                this.messageService.addError(event.body.message,event.body.type)              }
            }
        ),
        catchError(err => {
          if ([400].includes(err.status)) {
            this.messageService.addError(err.error.message,err.error.type)
          }

          const error = err.error.message || err.statusText;
          return throwError(() => error);
      }));

    }
}
