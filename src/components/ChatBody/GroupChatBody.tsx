import { useEffect, useRef } from "react";
import Message from "../../models/Message.model";
import User from "../../models/User.model";
import DateSeparator from "./DateSeparator";
import GroupMessageIn from "./GroupMessageIn";
import GroupMessageOut from "./GroupMessageOut";

type Props = {
  messages: Message[] | undefined;
  users: User[] | undefined;
};

function GroupChatBody({ messages, users }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex min-h-screen flex-col justify-end bg-cover bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] py-16">
      <div className="p-6 flex flex-col gap-3 justify-end">
        <DateSeparator />
        {messages?.map((message) => {
          if (message.userId === 1) {
            return <GroupMessageOut message={message} key={message.id} />;
          }

          return (
            <GroupMessageIn
              message={message}
              user={users?.find((u) => u.id === message.userId)}
              key={message.id}
            />
          );
        })}
      </div>
      <div ref={bottomRef} />
    </div>
  );
}

export default GroupChatBody;
