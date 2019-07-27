import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor(private user: User, private userService: UserService) { }
  currentUser: User;
  ngOnInit() {
    this.currentUser = this.user;
  }

  showUserName() {
    this.userService.getUser().subscribe(
      (data: User) => this.user = new User
        (
          data['id'],
          data['legalName'],
          data['preferredName'],
          data['roles'],
          data['dateOfBirth']
        ),
        error => console.log(error)
    );
  }

}
