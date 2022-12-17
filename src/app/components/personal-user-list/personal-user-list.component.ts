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
  user!: User;

  userList: User[] = [];

  constructor(private service: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.get().then((data) => {
      this.userList = data;
      this.userList.splice(this.user.id!, 1);
    });
  }

  openChat(user2: User): void {}
}
