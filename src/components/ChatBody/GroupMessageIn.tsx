import { format } from "date-fns";
import Message from "../../models/Message.model";
import User from "../../models/User.model";

type Props = {
  message: Message;
  user: User | undefined;
};

function GroupMessageIn({ message, user }: Props) {
  const isValidUrl = (urlString: string) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="flex justify-start gap-2">
      <div className="self-end">
        <img
          src={user?.userImageUrl}
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={() => window.open(user?.userImageUrl)}
        />
      </div>
      <div className="bg-white max-w-xs	w-fit rounded-md p-2 px-3 shadow">
        <p className="text-sm font-medium text-pink-800">{user?.publicName}</p>
        <p className="text-sm text-slate-900 font-normal">{message.content}</p>
        <p className="text-xs text-end text-slate-600 font-normal">
          {format(new Date(message.createdAt!), "h:mm aaaa")}
        </p>
      </div>
    </div>
  );
}

export default GroupMessageIn;
