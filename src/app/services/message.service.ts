import Message from '../models/message.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  delete(id: number): Observable<Message> {
    return this.httpClient.delete<Message>(MESSAGES_ENDPOINT + id);
  }

  getById(id: number): Observable<Message> {
    return this.httpClient.get<Message>(MESSAGES_ENDPOINT + id);
  }
}

export default MessageService;
