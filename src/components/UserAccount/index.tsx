import AccountBody from "./AccountBody";
import AccountHeader from "./AccountHeader";
import { clsx } from "clsx";
import { Dispatch, SetStateAction } from "react";

type Props = {
  viewAccount: boolean;
  setViewAccount: Dispatch<SetStateAction<boolean>>
};

function UserAccount({ viewAccount, setViewAccount }: Props) {
  return (
    <div
      className={clsx({
        "min-h-screen flex flex-col w-full gap-8 bg-slate-100 z-50 fixed top-0 animate-right-to-center": viewAccount === true,
        "min-h-screen flex flex-col w-full gap-8 bg-slate-100 z-50 fixed top-0 right-full animate-right-to-left": viewAccount === false,
      })}
    >
      <AccountHeader setViewAccount={setViewAccount} />
      <AccountBody />
    </div>
  );
}

export default UserAccount;
