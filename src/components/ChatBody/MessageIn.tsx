import format from "date-fns/format";
import Message from "../../models/Message.model";

type Props = {
  message: Message;
};

function MessageIn({ message }: Props) {
  const isValidUrl = (urlString: string) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="flex justify-start">
      <div className="bg-white max-w-xs	w-fit rounded-md p-2 px-3 shadow">
        <p className="text-sm text-slate-900 font-normal">{message.content}</p>
        <p className="text-xs text-end text-slate-600 font-normal">
          {format(new Date(message.createdAt!), "h:mm aaaa")}
        </p>
      </div>
    </div>
  );
}

export default MessageIn;
