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
  id: number = -1;
  username: string = '';
  password: string = '';

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
    });
  }

  logout(username: string) {
    this.service.getUsersID(username).then((id) => {
      this.id = id;
      this.service.logout(username, id);
    });
  }
}
