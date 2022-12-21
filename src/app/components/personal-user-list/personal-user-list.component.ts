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
  onlineUsers: User[] = [];
  offlineUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initLists();
    setInterval(() => this.initLists(), 2000);
  }

  initLists() {
    this.userService.getUsers().then((res) => {
      this.userList = res.filter((u) => u.username !== this.username);
      this.onlineUsers = this.userList.filter((u) => u.isOnline);
      this.offlineUsers = this.userList.filter((u) => !u.isOnline);
    });
  }
}
