import type { IncomingMessage } from "http";
import { NextResponse } from "next/server";
import type { WebSocketServer, WebSocket } from "ws";

export const GET = () => {
  return NextResponse.json({
    message: "This endpoint is reserved for websocket transports",
  });
};

export const SOCKET = (
  client: WebSocket,
  request: IncomingMessage,
  server: WebSocketServer
) => {
  console.log("A client connected!");

  client.on("message", (message) => {
    client.send(message);
  });

  client.on("close", () => {
    console.log("A client disconnected!");
  });
};
