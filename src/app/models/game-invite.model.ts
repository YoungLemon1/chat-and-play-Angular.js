import Message from './message.model';

class GameInvite extends Message {
  constructor(
    senderUsername: string,
    recipientUsername: string,
    text: string,
    createdTime: Date,
    public gameId: number,
    public inviteLink: string,
    public inviteStatus: boolean | null
  ) {
    super(senderUsername, recipientUsername, text, createdTime);
    inviteLink = '';
    inviteStatus = null;
  }
}
export default GameInvite;
