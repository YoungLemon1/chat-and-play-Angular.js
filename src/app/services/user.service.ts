import User from 'src/app/models/user.model';

const USERS_ENDPOINT = 'http://localhost:3000/users/';

class UserService {
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
