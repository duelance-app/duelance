/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import "../styles/globals.css"
import { type AppType } from "next/app"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Provider as JotaiProvider } from "jotai"
import { type Session } from "next-auth"
import { SessionProvider as AuthProvider } from "next-auth/react"

import { api } from "@/lib/utils/api"
import Head from "@/components/Head"
import Header from "@/components/Header"
import Init from "@/components/Init"

const inter = Inter({ subsets: ["latin"] })

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <>
            <Head />
            <JotaiProvider>
                <AuthProvider session={session}>
                    <Init />
                    <div className={inter.className} id="font-div">
                        <Header />
                        <Component {...pageProps} />
                    </div>
                </AuthProvider>
            </JotaiProvider>
            <Analytics />
        </>
    )
}

export default api.withTRPC(MyApp)
