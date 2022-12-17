import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/models/user.model';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user: User | null = null;
  userList: User[] = [];

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      fetch(`http://localhost:3000/users/${params['username']}`)
        .then((response) => response.json())
        .then((data: User) => {
          this.user = data;
        });
    });
  }
}
