import { StompSubscription } from "@stomp/stompjs";
import clsx from "clsx";
import format from "date-fns/format";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SocketContext from "../../config/context";
import Message from "../../models/Message.model";
import User from "../../models/User.model";
import MessageService from "../../services/MessageService/MessageService";
import UserService from "../../services/UserService/UserService";

function GroupChat({ image, name, id }: any) {
  const [message, setMessage] = useState<Message>();
  const [sender, setSender] = useState<User>();
  const [date, setDate] = useState<Date>();
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const messageService = new MessageService();
  const userService = new UserService();
  const client = useContext(SocketContext);
  let subscription: StompSubscription;

  useEffect(() => {
    if (message === undefined) {
      messageService
        .getLastMessage(id)
        .then((data) => {
          setMessage(data);
        })
        .catch(() => setError(true));
    }

    if (message?.createdAt) {
      setDate(new Date(message.createdAt));
    }

    if (message?.userId) {
      userService.getUser(message.userId).then((data) => {
        setSender(data);
      });
    }

    userService.countUnreadChatMessages(1, id).then((d) => {
        setCount(d);
    });
  }, [message]);

  useEffect(() => {
    if (client?.connected) {
      subscription = client?.subscribe("/queue/chat/" + id, (m) => {
        if (m.body) {
          const body = JSON.parse(m.body) as Message;
          setMessage(body);
          setError(false);
        }
      });
    }
    return () => subscription?.unsubscribe();
  }, []);

  return (
    <>
      <NavLink
        to={"/chat/" + id}
        className="flex gap-4 px-6 py-2 hover:bg-slate-100 hover:cursor-pointer w-full h-20 items-center [&_hr]:hover:opacity-0"
      >
        <div className="shrink-0">
          <img src={image} className="w-12 h-12 rounded-full object-fill" />
        </div>
        <div className="overflow-hidden relative w-full">
          <p className="text-lg font-normal text-slate-900 ">{name}</p>
          <p
            className={clsx({
              "text-sm w-11/12 text-slate-700 truncate": count == 0,
              "text-sm w-11/12 text-slate-700 font-medium truncate": count > 0,
            })}
          >
            {message?.content && sender?.id
              ? sender.id === 1
                ? "Tú" + ": " + message.content
                : sender.publicName + ": " + message.content
              : "No hay mensajes en este chat."}
          </p>
          {count > 0 ? (
            <span
              className="
              absolute top-7 right-1 text-xs rounded-full bg-sky-400 h-6 w-6 flex items-center justify-center
              text-white font-medium shadow-sm"
            >
              {count}
            </span>
          ) : null}
          <p
            className={clsx({
              "absolute top-1 right-1 text-xs text-slate-500": count == 0,
              "absolute top-1 right-1 text-xs text-sky-500 font-medium":
                count > 0,
            })}
          >
            {date ? format(date, "MM/dd/yyyy") : error ? null : "Cargando..."}
          </p>
          <hr className="mt-3" />
        </div>
      </NavLink>
    </>
  );
}

export default GroupChat;
