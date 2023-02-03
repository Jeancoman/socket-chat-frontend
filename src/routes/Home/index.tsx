import { useState } from "react";
import ChatsPanel from "../../components/ChatsPanel/ChatsPanel";
import ContactsPanel from "../../components/ContactsPanel";
import SearchBar from "../../components/SearchBar";
import SideHeader from "../../components/SideHeader";
import UserAccount from "../../components/UserAccount";

function Home(){
  const [viewAccount, setViewAccount] = useState(false);
  const [viewContacts, setViewContacts] = useState(false);
  
    return (
        <>
          <aside className="min-h-screen relative">
            <SideHeader setViewAccount={setViewAccount} setViewContacts={setViewContacts} />
            <SearchBar />
            <hr />
            <ChatsPanel />
            <UserAccount viewAccount={viewAccount} setViewAccount={setViewAccount} />
            <ContactsPanel viewContacts={viewContacts} setViewContacts={setViewContacts}/>
          </aside>
        </>
      );
}

export default Home;