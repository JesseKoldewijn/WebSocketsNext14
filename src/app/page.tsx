import { api } from "@/trpc/server";
import dynamic from "next/dynamic";
import { headers } from "next/headers";

const TimestampStream = dynamic(
  () => import("@/components/socket-consumers/timestamp-ping"),
  {
    ssr: false,
  }
);

const Home = async () => {
  const headersList = headers();
  const hostname = headersList.get("host");

  const hello = await api.sockets.hello.query();

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center gap-8">
      <section className="flex flex-col items-center justify-center gap-2 text-pretty text-center">
        <h1 className="flex items-center justify-center gap-1">
          <span className="mr-1 border-r-2 pr-2 text-4xl font-bold">
            Sockets
          </span>
          <span className="text-4xl font-bold">Jereko</span>
        </h1>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 text-pretty text-center">
        <strong>tRPC</strong>
        <div className="flex items-center justify-center gap-2">
          <span>tRPC says</span>
          <code className="bg-neutral-800 px-2 py-1">{hello.message}</code>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 text-pretty text-center">
        <strong>WS</strong>
        <div className="flex items-center justify-center gap-2">
          {hostname && <TimestampStream hostname={hostname} />}
        </div>
      </section>
    </main>
  );
};
export default Home;
