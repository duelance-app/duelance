/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import { type GetServerSidePropsContext } from "next"
import { getServerSession } from "next-auth"

import { authOptions } from "@/pages/api/auth/[...nextauth]"

/**
 * Wrapper for getServerSession, used in trpc createContext and the
 * restricted API route
 * @see https://next-auth.js.org/configuration/nextjs
 */

export const getServerAuthSession = async (ctx: {
    req: GetServerSidePropsContext["req"]
    res: GetServerSidePropsContext["res"]
}) => {
    return await getServerSession(ctx.req, ctx.res, authOptions)
}
