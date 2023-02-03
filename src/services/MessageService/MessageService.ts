import Message from "../../models/Message.model";

export default class MessageService {
  async getLastMessage(id: number): Promise<Message> {
    const response = await fetch(
      `http://localhost:8080/api/chats/${id}/messages?last=1`
    );

    if (!response.ok) {
      return Promise.reject();
    }

    return (await response.json()) as Message;
  }

  async getAllMessages(id: number): Promise<Message[]> {
    const response = await fetch(
      `http://localhost:8080/api/chats/${id}/messages`
    );
    return (await response.json()) as Message[];
  }

  async sendMessage(message: Message, id: number): Promise<boolean> {
    const response = await fetch(
      `http://localhost:8080/api/chats/${id}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );

    if (!response.ok) {
      return false;
    }

    return true;
  }
}
