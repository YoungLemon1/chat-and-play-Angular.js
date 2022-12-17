import { Injectable } from '@angular/core';
import User from 'src/app/models/user.model';

const DBURL = 'http://localhost:3000/users/';

class UserService {
  constructor() {}
  async get() {
    const res = await fetch(DBURL);
    const data = await res.json();
    return data as User[];
  }

  async getUserById(id: number) {
    const res = await fetch(DBURL);
    const data = await res.json();
    const users = data as User[];
    return users[id];
  }

  async isUserAuthenticated(user: User) {
    const id = await this.userAuthenticationId(user);
    return id != -1;
  }

  async matchUser(user: User) {
    let id: number;
    let users: User[];
    const data = await this.get();
    users = data;
    const userId = await this.userAuthenticationId(user);
    id = userId;
    return (user = users[id]);
  }
  /*
  get()
  return.this.httpClient.get(DBURL);

  getById(id: number) {
    return this.httpClient.get(DBURL + id);
  }

  post(user: User) {
    return this.httpClient.post(DBURL, user);
  }

  put(user: User) {
    return this.httpClient.put(DBURL + user.id, user);
  }

  delete(id: number) {
    return this.httpClient.delete(DBURL + id);
  } */

  async userAuthenticationId(authUser: User) {
    const users = await this.get();
    return users.findIndex(
      (user) =>
        user.username === authUser.username &&
        user.password === authUser.password
    );
  }
}

export default UserService;
