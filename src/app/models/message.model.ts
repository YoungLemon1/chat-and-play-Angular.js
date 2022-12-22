import { CreateUUID } from "../utils";

class Message {
  private id: string | undefined;
  constructor(
    public senderUsername: string,
    public recipientUsername: string,
    public text: string,
    public createdTime: Date
  ) {
    this.id = CreateUUID();
  }

  public getId() : string | undefined {
    return this.id;
  }
}

export default Message;
