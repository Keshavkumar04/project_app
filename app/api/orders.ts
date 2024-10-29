// app/api/orders.ts

import { initTRPC } from "@trpc/server";
import { z } from "zod";
import prismadb from "../prismadb";

const t = initTRPC.create(); // Create an instance of TRPC

export const ordersRouter = t.router({
  getAll: t.procedure
    .input(
      z.object({
        page: z.number().optional(),
        limit: z.number().optional(),
      })
    )
    .query(async ({ input }) => {
      const page = input?.page || 0;
      const limit = input?.limit || 10;

      const orders = await prismadb.order.findMany({
        skip: page * limit,
        take: limit,
        include: {
          lineItems: true,
        },
      });

      const totalCount = await prismadb.order.count();

      return {
        orders,
        totalCount,
      };
    }),

  create: t.procedure
    .input(
      z.object({
        customer: z.string(),
        address: z.string(),
        status: z.string(),
        lineItems: z.array(
          z.object({
            product: z.string(),
            quantity: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      const { customer, address, status, lineItems } = input;

      const order = await prismadb.order.create({
        data: {
          customer,
          address,
          status,
          lineItems: {
            create: lineItems,
          },
        },
      });

      return order;
    }),
});
