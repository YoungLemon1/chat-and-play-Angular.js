import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import User from 'src/app/models/user.model';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: UserService) {
    service = new UserService();
  }
  authenticateUser(user: User) {
    if (this.service.isUserAuthenticated(user)) {
    }
  }
}
