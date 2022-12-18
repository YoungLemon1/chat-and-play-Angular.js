import Message from '../models/message.model';
import User from '../models/user.model';

const MESSAGES_ENDPOINT = 'http://localhost:3000/messages/';

class MessageService {
  async getMessages() {
    const res = await fetch(MESSAGES_ENDPOINT);
    const data = await res.json();
    return data as Message[];
  }

  async createMessage(message: Message) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    };
  }
}

export default MessageService;
