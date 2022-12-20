import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { findIndex, Observable } from 'rxjs';
import User from 'src/app/models/user.model';

const USERS_ENDPOINT = 'http://localhost:3000/users/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable()
class UserService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(USERS_ENDPOINT);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(USERS_ENDPOINT, user);
  }

  update(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(USERS_ENDPOINT + id, user);
  }

  /*   delete(id: number): Observable<User> {
    return this.httpClient.delete<User>(USERS_ENDPOINT + id);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(USERS_ENDPOINT + id);
  } */

  async getUsersID(username: string) {
    let user = await this.getByUserName(username);
    const users = await this.getUsers();
    return users.findIndex((u) => u.username === user!.username);
  }

  async login(username: string, id: number) {
    let user = await this.getByUserName(username);
    user!.isOnline = true;
    this.update(id, user!).subscribe();
    this.router.navigate([`users-page/${username}`]);
  }

  async logout(username: string, id: number) {
    let user = await this.getByUserName(username);
    user!.isOnline = false;
    this.update(id, user!).subscribe();
    this.router.navigate(['login/']);
  }

  async getByUserName(username: string) {
    const users = await this.getUsers();
    return users.find((u) => u.username === username);
  }

  async isUsernameAvailable(username: string) {
    const users = await this.getUsers();
    return !users.some((u) => u.username === username);
  }

  async isUserOnline(username: string) {
    const user = await this.getByUserName(username);
    return user!.isOnline!;
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
