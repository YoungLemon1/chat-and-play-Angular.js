import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/models/user.model';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  username = '';
  password = '';

  authenticateUser() {
    this.service
      .isUserAuthenticated(this.username, this.password)
      .then((isAuthenticated) =>
        isAuthenticated
          ? this.routeToUsersPage(this.username)
          : console.log('username or password are incorrect, try again')
      );
  }

  routeToUsersPage(username: string) {
    this.router.navigate([`users-page/${username}`]);
  }
}
