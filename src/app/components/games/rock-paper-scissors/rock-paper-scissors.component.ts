import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import GameSession from 'src/app/models/game-session.model';
import Game from 'src/app/models/game.model';
import GameService from 'src/app/services/game.service';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css'],
})
export class RockPaperScissorsComponent implements OnInit {
  constructor(
    private gameServise: GameService,
    private route: ActivatedRoute
  ) {}
  session:GameSession | undefined;
  currentPlayer: string = '';
  player1: string = '';
  player2: string = '';
  winner: string = '';
  gameStart: boolean = false;
  game: Game | undefined;
  choises: string[] = ['rock', 'paper', 'scissors'];
  player1Choise: string = '';
  player2Choise: string = '';
  ngOnInit(): void {
    this.gameServise.getById(this.session!.gameId).subscribe((game) => {
      this.game = game;
      if (this.player1 !== '') game.isPlayer1Ready = true;
      if (this.player2 !== '') game.isPlayer2Ready = true;
      if (game.isPlayer1Ready && game.isPlayer2Ready) this.gameStart = true;
    });
  }

  rock() {}

  paper() {}

  scissors() {}
}
