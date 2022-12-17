import User from 'src/app/models/user.model';

const USERS_ENDPOINT = 'http://localhost:3000/users/';

class UserService {
  constructor() {}
  async getUsers() {
    const res = await fetch(USERS_ENDPOINT);
    const data = await res.json();
    return data as User[];
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

  async isUserAuthenticated(username: string, password: string) {
    const users = await this.getUsers();
    return users.some(
      (user) => user.username === username && user.password === password
    );
  }
}

export default UserService;
