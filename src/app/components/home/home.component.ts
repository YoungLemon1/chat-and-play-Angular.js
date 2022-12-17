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
  routToUsersPage(user: User) {
    let id = this.service.getUsersID(user);
    if (id != -1) {
      this.router.navigate([`users-page/${id}`]);
    } else {
      console.log('username or password are incorrect, please try again');
    }
  }
}
