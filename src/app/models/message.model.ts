class Message {
  constructor(
    public id?: string,
    public senderId?: string,
    public text?: string,
    public createdTime?: Date
  ) {}
}

export default Message;
