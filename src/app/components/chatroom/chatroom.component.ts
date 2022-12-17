import { Component } from '@angular/core';
import Chatroom from 'src/app/models/chatroom';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent {
  chatroom = new Chatroom();
}
