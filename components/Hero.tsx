import React from "react"
import SocialMedia from "./SocialMedia"
import Link from "next/link"
import Image from "next/image"
import { SearchBar } from "./SearchBar"
import { useTranslation } from "next-i18next"

export default function Hero() {
    const { t } = useTranslation()

    return (
        <div className="w-full mt-4 header_hero bg-gray relative z-10 overflow-hidden ">
            <div className="mx-auto">
                <div className="flex  flex-col  justify-center items-center sm:flex-row-reverse sm:justify-center">
                    <div className="sm:w-1/3 relative">
                        <Image alt="app layout" layout="fixed" width="300" height="600" src="/pixel-mockup.png" />
                    </div>

                    <div className="mx-10  max-w-2xl">
                        <h2 className="font-bold text-3xl">{t('hero:title_str')}</h2>
                        <SearchBar />
                        <p className="p-4">
                            {t('hero:short_desk_str')}
                        </p>
                        <div className="p-4">
                            <div className="flex items-center mb-4">
                                <span className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded flex justify-center items-center">
                                    <span className=" checkmark">L</span>
                                </span>
                                <span className="ml-4">{t("hero:check_box_1")}</span>
                            </div>
                            <div className="flex items-start mb-4">
                                <span className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded flex justify-center items-center">
                                    <span className=" checkmark">L</span>
                                </span>
                                <span className="ml-4">{t("hero:check_box_2")}</span>
                            </div>
                            <div className="flex items-start mb-4">
                                <span className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded flex justify-center items-center">
                                    <span className=" checkmark">L</span>
                                </span>
                                <span className="ml-4">{t("hero:check_box_3")}</span>
                            </div>
                        </div>
                        <div className="flex my-4 items-center">
                            <div className="relative mx-10 h-10 w-32 cursor-pointer">
                                <Link passHref={true} href="https://apps.apple.com/us/app/plante/id1574070382">
                                    <Image alt="Appstore link" layout="fill" src="/appstore.svg" />
                                </Link>
                            </div>
                            <div className="relative mx-4 h-10 w-32 cursor-pointer">
                                <Link
                                    passHref={true}
                                    href="https://play.google.com/store/apps/details?id=vegancheckteam.plante"
                                >
                                    <Image alt="Playstore link" className="mx-4 " layout="fill" src="/playstore.png" />
                                </Link>
                            </div>
                        </div>
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}
