import Message from './message.model';

class GameInvite extends Message {
  constructor(
    senderUsername: string,
    recipientUsername: string,
    text: string,
    inviteLink: string,
    createdTime: Date
  ) {
    super(senderUsername, recipientUsername, text, createdTime);
    inviteLink = '';
  }
}
