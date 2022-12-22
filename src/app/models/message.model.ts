import { CreateUUID } from '../utils';

class Message {
  public id: string;
  constructor(
    public senderUsername: string,
    public recipientUsername: string,
    public text: string,
    public createdTime: Date
  ) {
    this.id = CreateUUID();
  }
}

export default Message;
