import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url = 'http://localhost:3000/auth/register';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
