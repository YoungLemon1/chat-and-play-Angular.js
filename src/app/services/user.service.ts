import { Injectable } from '@angular/core';
import User from 'src/app/models/user.model';

const DBURL = 'http://localhost:3000/users/';

class UserService {
  constructor() {
    let x = 1;
  }
  get() {
    return fetch(DBURL)
      .then((res) => res.json())
      .then((data) => data as User[]);
  }

  getUserById(id: number) {
    return fetch(DBURL)
      .then((res) => res.json())
      .then((data) => data as User[])
      .then((users) => users[id]);
  }

  isUserAuthenticated(user: User) {
    return this.userAuthenticationId(user).then((id) => id != -1);
  }

  matchUser(user: User) {
    let id: number;
    let users: User[];
    return this.get()
      .then((data) => (users = data))
      .then(() => this.userAuthenticationId(user))
      .then((userId) => (id = userId))
      .then(() => (user = users[id]));
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

  userAuthenticationId(authUser: User) {
    let id = -1;
    return this.get()
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          let currentUser = users[i];
          if (currentUser.username === authUser.username) {
            if (currentUser.password === authUser.password) {
              id = i;
            } else {
              console.log('Password is incorrect');
            }
            break;
          }
        }
      })
      .then(() => {
        return id;
      });
  }
}

export default UserService;
