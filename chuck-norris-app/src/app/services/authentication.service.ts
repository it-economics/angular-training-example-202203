import {Injectable} from '@angular/core';
import {Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;

  constructor() {
  }

  login(username: string, password: string): Observable<boolean> {
    return of(password === 'secret').pipe(tap(loginSuccessful => this.authenticated = loginSuccessful))
  }
}
