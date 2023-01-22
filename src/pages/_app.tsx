/****************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 ****************************************************************************/

import "../styles/globals.css"
import { Inter } from "@next/font/google"
import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { Provider } from "jotai"
import { api } from "@/utils/api"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <Provider>
            <SessionProvider session={session}>
                <div className={inter.className}>
                    <Component {...pageProps} />
                </div>
                <Analytics />
            </SessionProvider>
        </Provider>
    )
}

export default api.withTRPC(MyApp)
