import format from "date-fns/format";
import Message from "../../models/Message.model";

type Props = {
  message: Message
}

function MessageOut({ message }: Props) {
  return (
    <div className="flex justify-end">
      <div className="bg-sky-200 w-fit max-w-xs	 rounded-md p-2 px-3 shadow">
        <p className="text-sm text-slate-900 font-normal">{message.content}</p>
        <p className="text-xs text-end">{format(new Date(message.createdAt!), "h:mm aaaa")}</p>
      </div>
    </div>
  );
}

export default MessageOut;
