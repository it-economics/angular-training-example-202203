import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() {}

  login(password: string): Observable<boolean> {
    if (password === 'secret') {
      return of(true).pipe(
        tap(() => {
          this.isLoggedIn = true;
        })
      );
    }
    return of(false);
  }
}
