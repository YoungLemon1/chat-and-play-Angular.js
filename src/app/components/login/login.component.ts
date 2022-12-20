import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      .then(async (isAuthenticated) => {
        if (isAuthenticated) {
          const isOnline = await this.service.isUserOnline(this.username);
          if (isOnline) {
            alert('user is already logged in');
          } else {
            this.service.login(this.username);
          }
        } else {
          alert('user or password are incorrect');
        }
      });
  }

  routeToUsersPage(username: string) {
    this.router.navigate([`users-page/${username}`]);
  }
}
