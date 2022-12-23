import Message from '../models/message.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import GameInvite from '../models/game-invite.model';

const MESSAGES_ENDPOINT = 'http://localhost:3000/messages/';

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

  getInviteById(id: string): Observable<GameInvite> {
    return this.httpClient.get<GameInvite>(MESSAGES_ENDPOINT + id);
  }

  update(id: string, message: Message): Observable<Message> {
    return this.httpClient.put<Message>(MESSAGES_ENDPOINT + id, message);
  }

  patchInviteResponse(id:string, status: boolean, text:string ){
    return this.httpClient.patch<GameInvite>(MESSAGES_ENDPOINT, {
      id: id,
      inviteStatus: status,
      text: text
    });
  }

  clearMessages() {
    this.get().subscribe((messages) => messages = [])
  }
}

export default MessageService;
