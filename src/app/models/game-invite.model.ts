import Message from './message.model';

class GameInvite extends Message {
  constructor(
    senderUsername: string,
    recipientUsername: string,
    text: string,
    createdTime: Date,
    public inviteLink: string,
    public gameTitle: string,
    public inviteStatus: boolean | null
  ) {
    super(senderUsername, recipientUsername, text, createdTime);
    gameTitle = '';
    inviteLink = '';
    inviteStatus = null;
  }
}
export default GameInvite;
