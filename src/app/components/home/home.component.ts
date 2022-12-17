import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/models/user.model';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    service = new UserService();
  }
  user: User = new User();

  authenticateUser(user: User) {
    this.service
      .isUserAuthenticated(user)
      .then((isAuthenticated) =>
        isAuthenticated
          ? this.routToUsersPage(user)
          : console.log('username or password are incorrect, try again')
      );
  }

  routToUsersPage(user: User) {
    this.service
      .matchUser(user)
      .then((data) => (user = data))
      .then(() => this.router.navigate([`users-page/${user.id}`]));
  }
}
