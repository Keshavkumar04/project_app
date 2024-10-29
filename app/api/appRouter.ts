// app/api/appRouter.ts

import { initTRPC } from "@trpc/server";
import { ordersRouter } from "./orders"; // Ensure this path is correct

const t = initTRPC.create(); // Create an instance of TRPC

export const appRouter = t.router({
  orders: ordersRouter, // Merge the orders router
});

// Export type definition of API
export type AppRouter = typeof appRouter;
