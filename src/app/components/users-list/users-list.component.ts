import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  userList: User[] = [];

  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.service.getUsers().then((userList) => (this.userList = userList));
  }

  userAuthentication(user: User) {}
}
