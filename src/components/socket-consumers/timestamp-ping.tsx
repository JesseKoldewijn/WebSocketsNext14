"use client";

import SocketsWrapper from "@/lib/SocketsWrapper";
import { useWebSocket } from "next-ws/client";
import { useCallback, useEffect, useState } from "react";

type TimestampStreamProps = {
  hostname: string;
};

const TimestampStream = ({ hostname }: TimestampStreamProps) => {
  return (
    <SocketsWrapper
      wsProps={{
        url: `ws://${hostname}/api/ws/ping`,
      }}
    >
      <TimestampStreamContent />
    </SocketsWrapper>
  );
};

const TimestampStreamContent = () => {
  const ws = useWebSocket();

  const [value, setValue] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const onMessage = useCallback(
    (event: MessageEvent<Blob>) => void event.data.text().then(setMessage),
    []
  );

  useEffect(() => {
    ws?.addEventListener("message", onMessage);

    return () => ws?.removeEventListener("message", onMessage);
  }, [onMessage, ws]);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <p className="max-w-sm text-pretty pb-2">
        Use the inputfield below to type a message to the server, and get a
        reply back right away!
      </p>

      <div className="flex max-w-sm gap-2">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Type a message to the server..."
          className="w-80 rounded-lg border px-3 py-1 text-neutral-950"
        />

        <button
          className="rounded-lg border px-3 py-1"
          onClick={() => ws?.send(value)}
        >
          Send
        </button>
      </div>

      <code className="bg-neutral-800 px-2 py-1">
        {message ? message : "Waiting for a message from the server..."}
      </code>
    </div>
  );
};

export default TimestampStream;
