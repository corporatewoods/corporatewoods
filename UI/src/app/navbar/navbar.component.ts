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
  isAdministrator: boolean;

  ngOnInit() {
    this.getUser();
    this.isAdministrator = this.checkIfAdministrator(this.user);
  }

  getUser() {
    this
      .userService
      .getAUser()
      .subscribe((data: User) => this.user = {
        id: data['id'],
        legalName: data['legalName'],
        preferredName: data['preferredName'],
        roles: data['roles']
      });
  }

  checkIfAdministrator(user: User): boolean {
    if (user != null && user.roles.includes('Administrator')) {
      console.log("yes, you are an administrator!");
      return true;
    } else {
      if (user != null) {
        console.log("welcome, user!");
        return false;
      }
    }
    console.log("who are you?");
    return false;
  }
}
