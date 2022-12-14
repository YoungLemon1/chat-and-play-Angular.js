import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-user-list',
  templateUrl: './personal-user-list.component.html',
  styleUrls: ['./personal-user-list.component.css'],
})
export class PersonalUserListComponent implements OnInit {
  user: User = new User();
  userList: User[] = [];

  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.service
      .getById(this.user.id!)
      .then((userList) => (this.userList = userList));
  }

  userAuthentication(user: User) {}
}
