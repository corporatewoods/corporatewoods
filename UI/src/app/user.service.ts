import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private user: User, private http: HttpClient) { }
  userUrl = 'assets/user.json';

  getUser()
  {
    return this.http.get<User>(this.userUrl);
  }
}
