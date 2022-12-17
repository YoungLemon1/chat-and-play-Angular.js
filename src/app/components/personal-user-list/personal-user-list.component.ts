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
  @Input() user: User = new User();
  userList: User[] = [];

  constructor(private service: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      fetch(`http://localhost:3000/products/${params['id']}`)
        .then((response) => response.json())
        .then((data: User) => (this.user = data))
        .then(() => this.service.get())
        .then((data) => data.splice(this.user.id!, 1))
        .then((userList) => (this.userList = userList));
    });
  }
}
