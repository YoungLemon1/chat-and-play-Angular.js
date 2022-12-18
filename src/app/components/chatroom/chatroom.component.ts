import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Message from 'src/app/models/message.model';
import MessageService from 'src/app/services/message.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}
  currentUsername: string = '';
  otherUsername: string = '';
  messages: Message[] = [];
  text: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentUsername = params['currentUsername'];
      this.otherUsername = params['otherUsername'];

      this.messageService.getMessages().then((data) => {
        this.messages = data
          .filter(
            (m) =>
              (m.senderUsername === this.currentUsername &&
                m.recipientUsername === this.otherUsername) ||
              (m.senderUsername === this.otherUsername &&
                m.recipientUsername === this.currentUsername)
          )
          .sort(
            (objA, objB) => Number(objA.createdTime) - Number(objB.createdTime)
          );
      });
    });
  }

  sendMessage(text: string) {
    let currentDate = new Date();
    let message = new Message(
      this.currentUsername,
      this.otherUsername,
      text,
      currentDate
    );
    this.messageService.createMessage(message);
  }
}
