import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sockets Jereko",
    absolute: "Sockets Jereko",
    template: "%s | Sockets Jereko",
  },
  description: "Sockets Jereko - A simple Websockets + tRPC demo application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
