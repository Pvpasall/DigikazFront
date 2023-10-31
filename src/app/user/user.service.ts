import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiHost = 'http://127.0.0.1:8000/';
  private users$: Observable<User[]> = of([]);

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    this.users$ = this.http.get<User[]>(`${this.apiHost}/users/`).pipe(
      map((response: any) => response.results)
    );

    return this.users$;
  }

}