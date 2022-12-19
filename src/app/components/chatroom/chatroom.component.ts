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

      this.messageService.get().subscribe((res) => {
        this.messages = res
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

  sendMessage() {
    let currentDate = new Date();
    let message = new Message(
      this.currentUsername,
      this.otherUsername,
      this.text,
      currentDate
    );
    this.text = '';
    this.messageService.createMessage(message);
  }
}
