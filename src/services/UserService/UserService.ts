import Chat from "../../models/Chat.model";
import User from "../../models/User.model";

export default class UserService {
  async getChats(): Promise<Chat[]> {
    const response = await fetch("http://localhost:8080/api/users/1/chats");
    return (await response.json()) as Chat[];
  }
  async getUser(id: number): Promise<User> {
    const response = await fetch(`http://localhost:8080/api/users/${id}`);
    return (await response.json()) as User;
  }
  async getFriends(id: number): Promise<User[]> {
    const response = await fetch(`http://localhost:8080/api/users/${id}/friends`);
    return (await response.json()) as User[];
  }
  async countUnreadChatMessages(userId: number, chatId: number): Promise<number>{
    const response = await fetch(`http://localhost:8080/api/users/${userId}/chats/${chatId}/messages/unread`);
    return (await response.json()) as number;
  }
}
