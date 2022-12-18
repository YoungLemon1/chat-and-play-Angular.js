class Message {
  constructor(
    public senderUsername: string,
    public recipientUsername: string,
    public text: string,
    public createdTime: Date
  ) {}
}

export default Message;
