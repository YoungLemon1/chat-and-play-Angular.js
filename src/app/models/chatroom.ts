import Message from './message.model';
import User from './user.model';

class Chatroom {
  constructor(
    public id?: string,
    public users?: User[],
    public messages?: Message[]
  ) {}
}

export default Chatroom;
