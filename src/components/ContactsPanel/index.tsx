import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import PanelBody from "./PanelBody";
import PanelHeader from "./PanelHeader";

type Props = {
  viewContacts: boolean;
  setViewContacts: Dispatch<SetStateAction<boolean>>;
};

export default function ContactsPanel({ viewContacts, setViewContacts }: Props) {
  return (
    <div
      className={clsx({
        "min-h-screen flex flex-col w-full gap-2 bg-white z-50 fixed top-0 animate-right-to-center":
          viewContacts === true,
        "min-h-screen flex flex-col w-full gap-2 bg-white z-50 fixed top-0 right-full animate-right-to-left":
          viewContacts === false,
      })}
    >
      <PanelHeader setViewContacts={setViewContacts} />
      <PanelBody />
    </div>
  );
}
