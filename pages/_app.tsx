import "../styles/global.css"
import { appWithTranslation } from 'next-i18next'

import type { AppProps } from "next/app"
import Nav from "../components/Nav"

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}

export default appWithTranslation(App)
