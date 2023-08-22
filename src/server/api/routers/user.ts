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
    getBasic: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ input, ctx }) => {
            const user = ctx.prisma.user.findUnique({
                where: { id: input.id },
                select: {
                    id: true,
                    userName: true,
                    name: true,
                    email: true,
                    image: true,
                    bio: true,
                    status: true,
                },
            })
            const followers = ctx.prisma.follower.count({
                where: { userId: input.id },
            })
            const following = ctx.prisma.follower.count({
                where: { followerId: input.id },
            })
            const data = ctx.prisma.$transaction([user, followers, following])
            return data
        }),
    getAdditional: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ input, ctx }) => {
            const data = ctx.prisma.user.findUnique({
                where: { id: input.id },
                select: {
                    tags: true,
                    socials: true,
                    awards: true,
                    certificates: true,
                    courses: true,
                    education: true,
                    experience: true,
                    projects: true,
                    skills: true,
                    publications: true,
                },
            })

            return data
        }),
})
