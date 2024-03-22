import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthenticationService } from '../_services';
import { MessageBody } from '../_models/message-body';

@Injectable()
export class MessageInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                alert(event.body?.message);
              }
            }
        ),
        catchError(err => {
          if ([500].includes(err.status)) {
            alert(err.error.message);
          }

          const error = err.error.message || err.statusText;
          return throwError(() => error);
      }));

    }
}
