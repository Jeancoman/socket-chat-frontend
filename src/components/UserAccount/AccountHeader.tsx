import { Dispatch, SetStateAction } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow_back.svg";

type Props = {
  setViewAccount: Dispatch<SetStateAction<boolean>>
};

function AccountHeader({setViewAccount} : Props) {
  return (
    <header className="bg-sky-300 h-16 w-full flex items-center p-6 gap-2">
        <div className="p-2 hover:bg-sky-400 cursor-pointer rounded-md" onClick={() => setViewAccount(false)}>
          <div className="h-6 w-6">
            <Arrow viewBox="0 0 45 45" height={24} width={24} className="fill-white" />
          </div>
        </div>
        <p className="text-lg font-medium text-white">{"Perfil"}</p>
    </header>
  );
}

export default AccountHeader;
