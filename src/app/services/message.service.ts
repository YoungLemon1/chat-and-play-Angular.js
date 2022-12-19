import Message from '../models/message.model';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const MESSAGES_ENDPOINT = 'http://localhost:3000/messages/';

@Injectable()
class MessageService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(MESSAGES_ENDPOINT);
  }

  create(prod: Message): Observable<Message> {
    return this.httpClient.post<Message>(MESSAGES_ENDPOINT, prod);
  }

  delete(id: number): Observable<Message> {
    return this.httpClient.delete<Message>(MESSAGES_ENDPOINT + id);
  }

  getById(id: number): Observable<Message> {
    return this.httpClient.get<Message>(MESSAGES_ENDPOINT + id);
  }

  async getMessages() {
    const res = await fetch(MESSAGES_ENDPOINT);
    const data = await res.json();
    return data as Message[];
  }

  async createMessage(message: Message) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    };

    const response = await fetch(MESSAGES_ENDPOINT, requestOptions);
  }
}

export default MessageService;
