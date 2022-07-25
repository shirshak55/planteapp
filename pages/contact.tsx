import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'hero', 'socialmedia', 'nav']))
        }
    }
}

export default function Contact() {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center m-8">
                <div className=" c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-8">
                    Contact Us on plante.application@gmail.com
                </div>
            </div>
        </>
    )
}
