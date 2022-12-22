import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Game from '../models/game';
import GameSession from '../models/game.session';

const GAMES_ENDPOINT = 'http://localhost:3000/games';

@Injectable()
class GameService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(GAMES_ENDPOINT);
  }

  getById(id:number):Observable<Game> {
    return this.httpClient.get<Game>(GAMES_ENDPOINT + id);
  }

  createGameSession(gameId:number, player1:string, player2:string) {
    const sessionId = this.CreateUUID();
    return this.httpClient.post<GameSession>
  }

  private CreateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

export default GameService;
