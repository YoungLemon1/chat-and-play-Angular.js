import Chatroom from 'src/app/models/chatroom.model';

const CHATROOMS_ENDPOINT = 'http://localhost:3000/chatrooms/';

class ChatroomService {
  async getChatrooms() {
    const res = await fetch(CHATROOMS_ENDPOINT);
    const data = await res.json();
    return data as Chatroom[];
  }
}
export default ChatroomService;
