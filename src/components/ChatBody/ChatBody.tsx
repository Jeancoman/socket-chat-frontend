import Message from "../../models/Message.model";
import MessageOut from "./MessageOut";
import MessageIn from "./MessageIn";
import { useEffect, useRef } from "react";

type Props = {
  messages: Message[] | undefined;
};

function ChatBody({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex min-h-screen flex-col justify-end bg-cover bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pb-16">
      <div className="p-6 flex flex-col gap-3 justify-end">
        {messages?.map((message) => {
          if (message.userId === 1) {
            return <MessageOut message={message} key={message.id} />;
          }

          return <MessageIn message={message} key={message.id} />;
        })}
      </div>
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatBody;
