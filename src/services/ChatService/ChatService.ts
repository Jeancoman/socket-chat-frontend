import Chat from "../../models/Chat.model";
import ChatDetails from "../../models/ChatDetails.model";
import User from "../../models/User.model";

export default class ChatService {
  async getAllUsers(id: number): Promise<User[]> {
    const response = await fetch(`http://localhost:8080/api/chats/${id}/users`);
    return (await response.json()) as User[];
  }

  async getChat(id: number): Promise<Chat> {
    const response = await fetch(`http://localhost:8080/api/chats/${id}`);
    return (await response.json()) as Chat;
  }

  async getPrivateChat(ids: number[]): Promise<Chat> {
    const response = await fetch(
      `http://localhost:8080/api/users/1/chats?userId=${ids[0]}&userId=${ids[1]}&type=USER_TO_USER`
    );
    return (await response.json()) as Chat;
  }

  async getChatDetails(chatId: number, userId: number): Promise<ChatDetails> {
    const response = await fetch(
      `http://localhost:8080/api/users/${userId}/chats/${chatId}/details`
    );
    return (await response.json()) as ChatDetails;
  }

  async patchChatDetails(
    userId: number,
    chatId: number,
    newDetails: ChatDetails
  ): Promise<ChatDetails> {
    const response = await fetch(
      `http://localhost:8080/api/users/${userId}/chats/${chatId}/details`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDetails),
      }
    );
    return (await response.json()) as ChatDetails;
  }
}
