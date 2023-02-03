import { Client } from "@stomp/stompjs";

const client = new Client({
  brokerURL: "ws://localhost:8080/websocket",
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

client.onConnect = function (frame) {
  console.log("Client connected: " + frame.body);
};

client.onStompError = function (frame) {
  console.log("Broker reported error: " + frame.headers["message"]);
  console.log("Additional details: " + frame.body);
};

client.activate();

export default client;
