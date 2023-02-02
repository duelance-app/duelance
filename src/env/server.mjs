/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

// @ts-check
/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */
import { serverSchema, serverEnv } from "./schema.mjs"
import { env as clientEnv, formatErrors } from "./client.mjs"

const _serverEnv = serverSchema.safeParse(serverEnv)

if (!_serverEnv.success) {
    console.error(
        "❌ Invalid environment variables:\n",
        ...formatErrors(_serverEnv.error.format())
    )
    throw new Error("Invalid environment variables")
}

for (let key of Object.keys(_serverEnv.data)) {
    if (key.startsWith("NEXT_PUBLIC_")) {
        console.warn("❌ You are exposing a server-side env-variable:", key)

        throw new Error("You are exposing a server-side env-variable")
    }
}

export const env = { ..._serverEnv.data, ...clientEnv }
