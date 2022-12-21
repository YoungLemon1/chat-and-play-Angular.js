import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Game from 'src/app/models/game';
import GameInvite from 'src/app/models/game-invite.model';
import Message from 'src/app/models/message.model';
import GameService from 'src/app/services/game.service';
import MessageService from 'src/app/services/message.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private gameServices: GameService,
    private route: ActivatedRoute
  ) {}
  currentUsername: string = '';
  otherUsername: string = '';
  messages: Message[] = [];
  text: string = '';
  showGames: boolean = false;
  games: Game[] = [];
  inviteLink: string = '';

  ngOnInit() {
    setInterval(() => this.getChatMessages(), 2000);
    this.route.queryParams.subscribe((params) => {
      this.currentUsername = params['currentUsername'];
      this.otherUsername = params['otherUsername'];
      this.getChatMessages();
    });

    this.gameServices.get().subscribe((games) => (this.games = games));
  }

  getChatMessages() {
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

  isMessageGameInvite(message: Message) {
    return message instanceof GameInvite;
  }

  openGameSelection() {
    this.showGames = !this.showGames;
  }

  inviteToGame(link: string, title: string) {
    let currentDate = new Date();
    let invite = new GameInvite(
      this.currentUsername,
      this.otherUsername,
      this.text,
      link,
      title,
      currentDate
    );
    this.messageService.create(invite).subscribe();
  }
}
