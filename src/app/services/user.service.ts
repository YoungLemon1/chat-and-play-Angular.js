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

  async getUsers(): Promise<User[]> {
    try {
      return await this.get();
    } catch (error) {
      console.log(error);
      return await this.get();
    }
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
    const res = this.get().then((users) => {
      for (let i = 0; i < users.length; i++) {
        let currentUser = users[i];
        if (currentUser.username === authUser.username) {
          if (currentUser.password === authUser.password) {
            return true;
          } else {
            console.log("user doesn't exist");
            break;
          }
        }
      }
      return false;
    });
    return res as unknown as boolean;
  }
}

export default UserService;
