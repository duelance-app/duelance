/****************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 * 
 * This file is part of the Duelance project.
 * 
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 ****************************************************************************/

import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
