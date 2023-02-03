import { ReactComponent as Options } from "../../assets/ellipsis-vertical-solid.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Account } from "../../assets/account_circle.svg";
import User from "../../models/User.model";

type InverseUser = {
  inverseUser: User | undefined
}

function ChatHeader({inverseUser}: InverseUser) {
  return (
    <header className="bg-slate-100 h-16 w-full z-50 flex items-center justify-between p-6 fixed top-0">
      <div className="flex items-center gap-4 hover:cursor-pointer">
      {inverseUser?.userImageUrl ? (
          <img
            src={inverseUser.userImageUrl}
            className="w-10 h-10 rounded-full object-fill shrink-0"
          />
        ) : (
          <div className="h-10 w-10">
            <Account className="fill-slate-200" width={40} height={40} viewBox="0 0 25 25" />
          </div>
        )}
        <p className="text-lg font-medium text-slate-900">{inverseUser?.publicName}</p>
      </div>
      <div className="flex gap-2">
        <div className="p-2 hover:bg-slate-300 cursor-pointer rounded-md">
          <div className="h-6 w-6">
            <Search
              className="hover:cursor-pointer"
              height={24}
              width={24}
              viewBox="0 0 50 50"
            />
          </div>
        </div>
        <div className="p-2 hover:bg-slate-300 cursor-pointer rounded-md">
          <div className="h-6 w-6">
            <Options className="hover:cursor-pointer" height={24} width={24} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ChatHeader;
