import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const socketsRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      message: "Hello from the server!",
    };
  }),
});
