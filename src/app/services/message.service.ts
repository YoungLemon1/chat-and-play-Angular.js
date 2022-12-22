import Message from '../models/message.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import GameInvite from '../models/game-invite.model';

const MESSAGES_ENDPOINT = 'http://localhost:3000/messages';

@Injectable()
class MessageService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(MESSAGES_ENDPOINT);
  }

  create(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(MESSAGES_ENDPOINT, message);
  }

  delete(id: string): Observable<Message> {
    return this.httpClient.delete<Message>(MESSAGES_ENDPOINT + id);
  }

  getById(id: string): Observable<Message> {
    return this.httpClient.get<Message>(MESSAGES_ENDPOINT + id);
  }

  update(id: string, message:Message): Observable<Message> {
    return this.httpClient.put<Message>(MESSAGES_ENDPOINT + id, message);
  }

  patchInviteStatus(id: string, invite: GameInvite, inviteStatus: boolean)
  {
    return this.httpClient.patch<GameInvite>(MESSAGES_ENDPOINT + id, {inviteStatus: {inviteStatus}});
  }
}

export default MessageService;
