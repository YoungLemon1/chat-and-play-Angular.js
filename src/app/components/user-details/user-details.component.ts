import { Component, Input, Output } from '@angular/core';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  @Input() user: User = new User();
  constructor() {}
}
