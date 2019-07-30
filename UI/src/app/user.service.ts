import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  user: User;
  userUrl = "assets/user.json";

  getAUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }
}
