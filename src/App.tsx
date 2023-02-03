import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocketContext from "./config/context";
import client from "./config/socket";
import ChatRoute from "./routes/Chat";
import Home from "./routes/Home";

function App() {
  return (
    <SocketContext.Provider value={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<ChatRoute />} />
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
