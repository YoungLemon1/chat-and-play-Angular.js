import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Game from '../models/game';

const MESSAGES_ENDPOINT = 'http://localhost:3000/games';

@Injectable()
class GameService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(MESSAGES_ENDPOINT);
  }
}

export default GameService;
