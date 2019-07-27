import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  user: User;
  userUrl = "assets/user.json";

  getAUser() {
    return this.http.get(this.userUrl);
  }
}
