import { useEffect, useState } from "react";
import Chat from "../../models/Chat.model";
import UserService from "../../services/UserService/UserService";
import GroupChat from "./GroupChat";
import NormalChat from "./NormalChat";

function ChatsPanel() {
  const userService = new UserService();
  const [chats, setChats] = useState<Chat[]>();

  useEffect(() => {
    userService.getChats().then((data) => setChats(data));
  }, []);

  return (
    <div className="flex flex-col items-center w-full	">
      {chats?.map((chat) => {
        {
          if (chat.type === "USER_TO_USER" && chat.isActive) {
            return <NormalChat id={chat.id} key={chat.id} />;
          } else if (
            (chat.type === "PRIVATE_GROUP" || chat.type === "PUBLIC_GROUP") &&
            chat.isActive
          ) {
            return (
              <GroupChat
                image={chat.chatImageUrl}
                name={chat.name}
                id={chat.id}
                key={chat.id}
              />
            );
          }
        }
      })}
    </div>
  );
}

export default ChatsPanel;
