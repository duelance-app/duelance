/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "../trpc"

export const userRouter = createTRPCRouter({
    get: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ input, ctx }) => {
            return ctx.prisma.user.findUnique({
                where: { id: input.id },
            })
        }),
})
