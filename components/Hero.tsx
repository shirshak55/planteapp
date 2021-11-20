import React from "react"
import SocialMedia from "./SocialMedia"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="w-full mt-4 header_hero bg-gray relative z-10 overflow-hidden ">
            <div className="mx-auto">
                <div className="flex  flex-col  justify-center items-center sm:flex-row-reverse sm:justify-center">
                    <div className="sm:w-1/3 relative">
                        <Image alt="app layout" layout="fixed" width="300px" height="500" src="/mock.webp" />
                    </div>

                    <div className="mx-10  max-w-2xl">
                        <h2 className="font-bold text-3xl">Community Based Vegan Groceries Map</h2>
                        <p>
                            Plante is a community-based app. Join us by adding your favorite products to the map and
                            help others discover something delicious!
                        </p>
                        <ul className="list-none my-4">
                            <li>Scan to check if a product is vegan</li>
                            <li>See stores and groceries on a map</li>
                            <li>Add new products and stores</li>
                        </ul>
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