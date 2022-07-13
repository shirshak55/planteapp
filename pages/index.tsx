import Hero from "../components/Hero"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
/*import 'tw-elements';*/


export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'hero', 'socialmedia', 'nav', 'privacy']))
        }
    }
}

export default function Home() {
    return (
        <>
            <Hero />
        </>
    )
}
