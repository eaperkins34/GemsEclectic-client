import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { User } from '../models/user-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  login(username: string, password: string) {
    const userToServer = {
      username,
      password
    };
    return this.http.post<any>('http://localhost:3000/user/login', userToServer)
    .pipe(map(user => {
      if (user.user && user) {
        localStorage.setItem('currentUser', user.sessionToken);
      }
      return user;
    }))
  }
}
