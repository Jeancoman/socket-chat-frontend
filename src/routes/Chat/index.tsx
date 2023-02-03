import { StompSubscription } from "@stomp/stompjs";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBody from "../../components/ChatBody/ChatBody";
import GroupChatBody from "../../components/ChatBody/GroupChatBody";
import ChatForm from "../../components/ChatForm";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import GroupChatHeader from "../../components/ChatHeader/GroupChatHeader";
import SocketContext from "../../config/context";
import Chat from "../../models/Chat.model";
import ChatDetails from "../../models/ChatDetails.model";
import Message from "../../models/Message.model";
import User from "../../models/User.model";
import ChatService from "../../services/ChatService/ChatService";
import MessageService from "../../services/MessageService/MessageService";

function ChatRoute() {
  const { id } = useParams();
  const [currentChat, setCurrentChat] = useState<Chat>();
  const [users, setUsers] = useState<User[]>();
  const [messages, setMessages] = useState<Message[]>();
  const [newMessage, setNewMessage] = useState<Message>();
  const chatService = new ChatService();
  const messageService = new MessageService();
  const client = useContext(SocketContext);
  let subscription: StompSubscription;

  useEffect(() => {
    chatService.getChat(Number(id)).then((data) => {
      setCurrentChat(data);
    });
    chatService.getAllUsers(Number(id)).then((data) => {
      setUsers(data);
    });
    messageService.getAllMessages(Number(id)).then((data) => {
      setMessages(data);
    });
  }, []);

  useEffect(() => {
    if (client?.connected) {
      subscription = client?.subscribe("/queue/chat/" + id, (m) => {
        if (m.body) {
          const body = JSON.parse(m.body) as Message;
          setNewMessage(body);
        }
      });
    }

    return () => subscription?.unsubscribe();
  }, []);

  useEffect(() => {
    if (messages && newMessage) {
      setMessages([...messages, newMessage]);
      const details: ChatDetails = {
        maxMessageId: newMessage.id!,
      };
      chatService.patchChatDetails(1, currentChat?.id!, details);
    }

    if (messages && newMessage === undefined) {
      const msgId: number = messages.at(-1)?.id!;
      const details: ChatDetails = {
        maxMessageId: msgId,
      };
      chatService.patchChatDetails(1, currentChat?.id!, details);
    }
  }, [newMessage]);

  return (
    <div className="min-h-screen relative">
      {currentChat?.type === "USER_TO_USER" ? (
        <>
          <ChatHeader inverseUser={users?.find((u) => u.id !== 1)} />
          <ChatBody messages={messages} />
          <ChatForm userId={1} chatId={Number(id)} />
        </>
      ) : (
        <>
          <GroupChatHeader chat={currentChat} />
          <GroupChatBody messages={messages} users={users} />
          <ChatForm userId={1} chatId={Number(id)} />
        </>
      )}
    </div>
  );
}

export default ChatRoute;
