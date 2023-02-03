import Message from "../../models/Message.model";

interface MessageService {
    findLastMessageOnChat(id: number): Message;
    findAllMessagesOnChat(id: number): Message[];
    sendMessageOnChat(message: Message): void;
}

export default MessageService;