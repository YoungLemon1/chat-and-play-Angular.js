import Message from './message.model';

class GameInvite extends Message {
  constructor(
    senderUsername: string,
    recipientUsername: string,
    text: string,
    public inviteLink: string,
    public gameTitle: string,
    createdTime: Date
  ) {
    super(senderUsername, recipientUsername, text, createdTime);
    gameTitle = '####';
    inviteLink = '';
  }
}
export default GameInvite;
