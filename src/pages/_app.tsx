import "../styles/globals.css"
import { Inter } from "@next/font/google"
import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { Provider } from "jotai"
import {api} from "@/utils/api"

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
            </SessionProvider>
        </Provider>
    )
}

export default api.withTRPC(MyApp)
