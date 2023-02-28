import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Game from 'src/app/models/game.model';
import GameInvite from 'src/app/models/game-invite.model';
import Message from 'src/app/models/message.model';
import GameService from 'src/app/services/game.service';
import MessageService from 'src/app/services/message.service';
import GameSession from 'src/app/models/game-session.model';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private gameServices: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  currentUsername: string = '';
  otherUsername: string = '';
  chatMessages: Message[] = [];
  text: string = '';
  showGames: boolean = false;
  games: Game[] = [];

  ngOnInit() {
    setInterval(() => this.getChatMessages(), 2000);
    this.route.queryParams.subscribe((params) => {
      this.currentUsername = params['currentUsername'];
      this.otherUsername = params['otherUsername'];
      this.getChatMessages();
    });

    let input = document.getElementById('message-text-input')!;

    // Execute a function when the user presses a key on the keyboard
    input.addEventListener('keypress', function (event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById('send-message-btn')!.click();
      }
    });

    this.gameServices.get().subscribe((games) => (this.games = games));
  }

  getChatMessages() {
    this.messageService.get().subscribe((res) => {
      this.chatMessages = this.organizeMessages(res);
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

  isMessageGameInvite(message: Message): message is GameInvite {
    return 'inviteLink' in message;
  }

  openGameSelection() {
    this.showGames = !this.showGames;
  }

  sendInvite(gameId:number, gameTitle:string, link: string) {
    const currentDate = new Date();
    this.text = `${this.currentUsername} has invited ${this.otherUsername} to play ${gameTitle}`;
    const invite = new GameInvite(
      this.currentUsername,
      this.otherUsername,
      this.text,
      currentDate,
      gameId,
      link,
      null);
    this.messageService.create(invite).subscribe();
    this.text = '';
  }

  submitInviteResponse(id: string, inviteStatus: boolean) {
    const messageService = this.messageService;
    const text = inviteStatus ? 'Invite accepted' : 'Invite declined';
    messageService.getInviteById(id).subscribe((invite) => {
      const replaceInvite: GameInvite = {
        ...invite,
        text,
        inviteStatus,
      };
      messageService.update(invite.id, replaceInvite).subscribe();
      if (inviteStatus) {
        const session = new GameSession(invite.gameId, invite.senderUsername, invite.recipientUsername)
        this.gameServices.createGameSession(session).subscribe();
      }
    });
  }
}
