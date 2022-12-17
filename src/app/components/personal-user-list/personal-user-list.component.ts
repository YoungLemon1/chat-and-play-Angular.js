import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import User from 'src/app/models/user.model';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-user-list',
  templateUrl: './personal-user-list.component.html',
  styleUrls: ['./personal-user-list.component.css'],
})
export class PersonalUserListComponent implements OnInit {
  @Input()
  username!: string;

  userList: User[] = [];

  constructor(private service: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.getUsers().then((data) => {
      this.userList = data.filter((u) => u.username !== this.username);
    });
  }

  openChat(user2: User): void {}
}
