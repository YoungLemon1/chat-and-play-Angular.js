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

  async authenticateUser() {
    const isAuthenticated = await this.service.isUserAuthenticated(
      this.username,
      this.password
    );

    if (isAuthenticated) {
      const isOnline = await this.service.isUserOnline(this.username);
      if (isOnline) {
        alert('user is already logged in');
      } else {
        this.service.getUsersID(this.username).then((id) => {
          this.service.login(this.username, id);
        });
      }
    } else {
      alert('user or password are incorrect');
    }
  }
}
