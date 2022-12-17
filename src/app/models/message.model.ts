class Message {
  constructor(
    public id: string,
    public index: number,
    public senderId: number,
    public recipientId: number,
    public text: string,
    public createdTime: Date
  ) {}
}

export default Message;
