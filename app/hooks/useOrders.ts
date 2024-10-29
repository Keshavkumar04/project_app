// app/hooks/useOrders.ts

import { trpc } from "../utils/trpc";

export const useOrders = (page: number, limit: number) => {
  return trpc.useQuery(["orders.getAll", { page, limit }]);
};
