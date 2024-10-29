// app/_app.tsx

import { AppType } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/app/utils/trpc"; // Ensure this import is correct

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider queryClient={queryClient}>
        <Component {...pageProps} />
      </trpc.Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
