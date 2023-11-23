import { Injectable } from '@angular/core';
import { RequestAuth } from '../models/request-auth';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { ResponseAuth } from '../models/response-auth';
import { User } from '../models/user';

const ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(creds: RequestAuth): Observable<User> {
    return this.http.post<ResponseAuth>(`${ENDPOINT}/auth/login`, creds).pipe(
      tap((auth: ResponseAuth) => {
        localStorage.setItem('token', `Bearer ${auth.access_token}`);
      }),
      switchMap((auth: ResponseAuth) => {
        return this.http.get<User>(`${ENDPOINT}/api/users/${auth.id}`);
      })
    );
  }

  logout(): void {
    localStorage.clear();
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
