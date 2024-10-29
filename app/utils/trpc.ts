// app/utils/trpc.ts

// import { createTRPCReact } from "@trpc/react";
// import type { AppRouter } from "../api/appRouter"; // Correct path to your appRouter

// export const trpc = createTRPCReact<AppRouter>();

// app/utils/trpc.ts

import { createTRPCReact } from "@trpc/react-query"; // Create a tRPC React instance
import type { AppRouter } from "../api/appRouter"; // Import the type definition for your API

export const trpc = createTRPCReact<AppRouter>(); // Export the configured tRPC client
