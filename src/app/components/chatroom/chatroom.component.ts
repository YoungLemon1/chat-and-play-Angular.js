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
    const chatroom = this;
    async function refresh() {
      const allMessages = await chatroom.messageService.getMessages();
      const chatMessages = chatroom.organizeMessages(allMessages);
      if (chatMessages.length > chatroom.messages.length) {
        console.log('entered if');
        chatroom.messageService.refresNeeded$.next();
      }
      // make Ajax call here, inside the callback call:
      setTimeout(refresh, 2000);
      // ...
    }

    // initial call, or just call refresh directly
    setTimeout(refresh, 2000);
    this.route.queryParams.subscribe((params) => {
      this.currentUsername = params['currentUsername'];
      this.otherUsername = params['otherUsername'];

      this.messageService.refresNeeded$.subscribe(() => {
        this.getChatMessages();
      });

      this.getChatMessages();
    });
  }

  private getChatMessages() {
    this.messageService.get().subscribe((res) => {
      this.messages = this.organizeMessages(res);
    });
  }
  organizeMessages(messages: Message[]) {
    return messages
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
    this.messageService.create(message).subscribe();
  }
}
