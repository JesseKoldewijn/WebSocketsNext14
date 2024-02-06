"use client";

import { WebSocketProvider, type WebSocketProviderProps } from "next-ws/client";

type SocketsWrapperProps = {
  wsProps: Omit<WebSocketProviderProps, "children">;
  children: React.ReactNode;
};

const SocketsWrapper = ({ wsProps, children }: SocketsWrapperProps) => {
  const props = {
    children,
    ...wsProps,
  };

  return <WebSocketProvider {...props}>{children}</WebSocketProvider>;
};
export default SocketsWrapper;
