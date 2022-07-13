import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "next-i18next"

export default function Nav() {
    const { t } = useTranslation()
    const languages = [
        {
            code: 'fr',
            name: 'Français',

        },
        {
            code: 'en',
            name: 'English',

        },
        {
            code: 'de',
            name: 'German',

        },
        {
            code: 'el',
            name: 'Greek',

        },
        {
            code: 'pl',
            name: 'Polish',

        },

        {
            code: 'ru',
            name: 'Russian',
        },
    ]
    return (
        <>
            <nav className="bg-white w-full z-10 top-0 shadow ">
                <div className="w-full sm:flex sm:justify-around sm:items-center mt-0 px-3 py-3">
                    <div className="xl:pl-0 mx-auto sm:mx-0   sm:flex sm:items-center sm:justify-between">
                        <Link passHref={true}
                              href="/">
                            <div className="flex justify-center  sm:items-center font-extrabold text-gray-700 no-underline hover:text-black hover:no-underline cursor-pointer">
                                <div className="h-12 relative">
                                    <Image alt="logo"
                                           layout="fill"
                                           src="/logo.png" />
                                </div>
                                <span className="text-2xl md:text-3xl pl-4">Plante App</span>
                            </div>
                        </Link>
                    </div>

                    <div className="xl:pl-0 mx-auto sm:mx-0   sm:flex sm:items-center sm:justify-between">
                        <div className="relative max-w-3xl  sm:flex sm:justify-end">
                            <Link passHref={true}
                                  href="/privacy">
                                <div className="my-2 py-2 no-underline hover:no-underline  flex items-center justify-center bg-transparent hover:bg-brand focus:border-teal-900 font-bold px-5 rounded hover:text-black cursor-pointer">
                                    <span className="pl-2">{t("nav:privacy_policy")}</span>
                                </div>
                            </Link>

                            <Link passHref={true}
                                  href="/contact">
                                <div className="my-2 py-2 no-underline hover:no-underline  flex items-center justify-center bg-transparent hover:bg-brand focus:border-teal-900 font-bold px-5 rounded hover:text-black cursor-pointer">
                                    <span className="pl-2">{t("nav:contact_us")}</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="group relative">
                            <button className="bg-gray-800 text-white px-6 h-10 rounded">Lang</button>
                            <nav tabIndex={0}
                                 className="border border-2 bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                                <ul className="py-1">
                                    {languages.map(({code, name}) => (
                                        <li key={name}>
                                            <Link href="/" locale={code}>
                                                <a>{name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
