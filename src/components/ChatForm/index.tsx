import { ReactComponent as Home } from "../../assets/house-solid.svg";
import { ReactComponent as File } from "../../assets/paperclip-solid.svg";
import { ReactComponent as Send } from "../../assets/paper-plane-solid.svg";
import { useState } from "react";
import MessageService from "../../services/MessageService/MessageService";
import Message from "../../models/Message.model";
import { NavLink } from "react-router-dom";

type Props = {
  userId: number;
  chatId: number;
};

function ChatForm({ userId, chatId }: Props) {
  const [content, setContent] = useState<string>("");
  const messageService = new MessageService();

  return (
    <div className="absolute bottom-0 bg-slate-100 h-16 w-full flex items-center px-6 gap-2">
      <div className="flex">
        <NavLink to="/" className="p-2 hover:bg-slate-300 cursor-pointer rounded-md">
          <div className="h-6 w-6">
            <Home />
          </div>
        </NavLink>
        <button className="p-2 hover:bg-slate-300 cursor-pointer rounded-md">
          <div className="h-6 w-6">
            <File />
          </div>
        </button>
      </div>
      <form
        className="w-full overflow-hidden"
        id="message-send"
        onSubmit={(e) => {
          e.preventDefault();
          const message: Message = {
            content: content!,
            userId,
            chatId,
          };
          messageService.sendMessage(message, chatId);
          setContent("");
        }}
      >
        <input
          type="text"
          placeholder="Escribe un mensaje aquí"
          className="w-full h-9 bg-white placeholder:text-sm placeholder:truncate px-2 placeholder:text-slate-500  outline-transparent rounded-md leading-10"
          onInput={(e) => setContent(e.currentTarget.value)}
          value={content}
        />
      </form>
      <button
        className="p-2 hover:bg-slate-300 cursor-pointer rounded-md"
        form="message-send"
        type="submit"
      >
        <div className="h-6 w-6">
          <Send />
        </div>
      </button>
    </div>
  );
}

export default ChatForm;
