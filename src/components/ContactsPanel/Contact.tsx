import { NavLink } from "react-router-dom";
import User from "../../models/User.model";
import { ReactComponent as Account } from "../../assets/account_circle.svg";
import ChatService from "../../services/ChatService/ChatService";
import { useEffect, useState } from "react";

type Props = {
  user: User | undefined;
};

export default function Contact({ user }: Props) {
  const [id, setId] = useState<number>();
  const chatService = new ChatService();

  useEffect(() => {
    if (user?.id) {
      chatService.getPrivateChat([1, user.id]).then((d) => {
        setId(d.id);
      });
    }
  }, []);

  return (
    <>
      <NavLink
        to={"/chat/" + id}
        className="flex gap-4 px-6 py-2 hover:bg-slate-100 hover:cursor-pointer w-full h-20 items-center [&_hr]:hover:opacity-0"
      >
        <div className="shrink-0">
          {user?.userImageUrl ? (
            <img
              src={user.userImageUrl}
              className="w-12 h-12 rounded-full object-fill"
            />
          ) : (
            <div className="h-12 w-12">
              <Account className="fill-slate-200" viewBox="0 0 25 25" />
            </div>
          )}
        </div>
        <div className="overflow-hidden relative w-full">
          <p className="text-lg font-medium text-slate-900 ">
            {user?.publicName}
          </p>
          <p className="text-sm text-slate-700 truncate">
            {user?.description
              ? user.description
              : "¡Hola!, ¿quieres chatear conmigo?"}
          </p>
          <hr className="mt-3" />
        </div>
      </NavLink>
    </>
  );
}
