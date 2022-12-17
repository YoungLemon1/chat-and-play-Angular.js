import { Injectable } from '@angular/core';
import User from 'src/app/models/user.model';

const DBURL = 'http://localhost:3000/users/';

class UserService {
  constructor() {}
  get() {
    return fetch(DBURL)
      .then((res) => res.json())
      .then((data) => data as User[]);
  }

  getUsersID(user: User): number {
    return user.id!;
    if (this.isUserAuthenticated(user)) {
      return user.id!;
    }
    return -1;
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

  isUserAuthenticated(authUser: User): boolean {
    let b = false;
    this.get().then((users) => {
      for (let i = 0; i < users.length; i++) {
        let currentUser = users[i];
        if (currentUser.username === authUser.username) {
          if (currentUser.password === authUser.password) {
            b = true;
          } else {
            console.log("user doesn't exist");
          }
          break;
        }
      }
    });
    return b;
  }
}

export default UserService;
