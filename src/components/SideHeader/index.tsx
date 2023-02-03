import { Dispatch, SetStateAction } from "react";
import { ReactComponent as Chat } from "../../assets/chat.svg";
import { ReactComponent as Options } from "../../assets/ellipsis-vertical-solid.svg";

type Props = {
  setViewAccount: Dispatch<SetStateAction<boolean>>;
  setViewContacts: Dispatch<SetStateAction<boolean>>;
};

function SideHeader({ setViewAccount, setViewContacts }: Props) {
  return (
    <header className="bg-slate-100 h-16 flex items-center justify-between p-6">
      <div>
        <img
          src="https://i.pinimg.com/736x/46/73/e1/4673e129046c33b4c54d28d62ebe45c3.jpg"
          className="w-10 h-10 rounded-full object-fill cursor-pointer"
          onClick={() => setViewAccount(true)}
        />
      </div>
      <div className="flex gap-1">
        <div className="p-2 hover:bg-slate-300 cursor-pointer rounded-md" onClick={() => setViewContacts(true)}>
          <div className="h-6 w-6">
            <Chat viewBox="0 0 45 45" height={24} width={24} />
          </div>
        </div>
        <div className="p-2 hover:bg-slate-300 cursor-pointer rounded-md">
          <div className="h-6 w-6">
            <Options height={24} width={24} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default SideHeader;
