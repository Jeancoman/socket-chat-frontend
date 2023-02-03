import { Client } from "@stomp/stompjs";
import { createContext } from "react";

const SocketContext = createContext<Client | null>(null)

export default SocketContext;
