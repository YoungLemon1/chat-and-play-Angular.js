import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/app/models/user.model';

const USERS_ENDPOINT = 'http://localhost:3000/users/';

@Injectable()
class UserService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(USERS_ENDPOINT);
  }

  create(prod: User): Observable<User> {
    return this.httpClient.post<User>(USERS_ENDPOINT, prod);
  }

  delete(id: number): Observable<User> {
    return this.httpClient.delete<User>(USERS_ENDPOINT + id);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(USERS_ENDPOINT + id);
  }

  async getUsers() {
    const res = await fetch(USERS_ENDPOINT);
    const data = await res.json();
    return data as User[];
  }

  async isUserAuthenticated(username: string, password: string) {
    const users = await this.getUsers();
    return users.some(
      (user) => user.username === username && user.password === password
    );
  }
}

export default UserService;
