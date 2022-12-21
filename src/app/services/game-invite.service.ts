import Message from '../models/message.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import GameInvite from '../models/game-invite.model';

const MESSAGES_ENDPOINT = 'http://localhost:3000/"game-invites"';

@Injectable()
class GameInviteService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<GameInvite[]> {
    return this.httpClient.get<GameInvite[]>(MESSAGES_ENDPOINT);
  }

  create(invite: GameInvite): Observable<GameInvite> {
    return this.httpClient.post<Message>(MESSAGES_ENDPOINT, invite);
  }

  delete(id: number): Observable<GameInvite> {
    return this.httpClient.delete<Message>(MESSAGES_ENDPOINT + id);
  }

  getById(id: number): Observable<GameInvite> {
    return this.httpClient.get<GameInvite>(MESSAGES_ENDPOINT + id);
  }
}

export default GameInviteService;
