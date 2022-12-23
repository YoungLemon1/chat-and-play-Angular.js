import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Game from '../models/game.model';
import GameSession from '../models/game-session.model';

const GAMES_ENDPOINT = 'http://localhost:3000/games';
const SESSIONS_ENDPOINT = 'http://localhost:3000/game-sessions';

@Injectable()
class GameService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(GAMES_ENDPOINT);
  }

  getById(id: number): Observable<Game> {
    return this.httpClient.get<Game>(GAMES_ENDPOINT + id);
  }

  createGameSession(session: GameSession) {
    return this.httpClient.post<GameSession>(SESSIONS_ENDPOINT, session);
  }
}

export default GameService;
