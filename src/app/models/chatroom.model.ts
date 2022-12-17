import Message from './message.model';
import User from './user.model';

class Chatroom {
  constructor(public user1: User, public user2: User) {}
}

export default Chatroom;
