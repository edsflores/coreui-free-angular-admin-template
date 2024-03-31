import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<User>(`${environment.apiUrl}/api/auth/signin`, { username, password },{responseType : 'json'})
            .pipe(map((user : User) => {
                if(user.accessToken != null && user.accessToken != undefined && user.accessToken != '' && user.accessToken != 'undefined') {
                  localStorage.setItem('user', JSON.stringify(user));
                  this.userSubject.next(user);
                  return user;
                } else {
                  return null;
                }
            }));
    }


    register(username: string, password: string, email: string) {
      return this.http.post<User>(`${environment.apiUrl}/api/auth/signup`, { username: username, email: email, password: password })
          .pipe(map((user: User) => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
          }));
  }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
