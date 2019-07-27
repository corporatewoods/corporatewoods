import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }
  applicationTitle = "CTL Capacity";
  user: User;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this
      .userService
      .getAUser()
      .subscribe((data: User) => this.user = {
        id: data['id'],
        legalName: data['legalName'],
        preferredName: data['preferredName']
      });
  }

}
