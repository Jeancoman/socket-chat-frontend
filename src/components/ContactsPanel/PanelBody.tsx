import { useEffect, useState } from "react";
import User from "../../models/User.model";
import UserService from "../../services/UserService/UserService";
import Contact from "./Contact";

export default function PanelBody(){
    const userService = new UserService();
    const [users, setUsers] = useState<User[]>();
  
    useEffect(() => {
      userService.getFriends(1).then((data) => setUsers(data));
    }, []);
    
    return (
        <div className="flex flex-col items-center w-full">
            {users?.map(u => {
                return <Contact user={u} key={u.id} />
            })}
        </div>
    )
}