/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { i18n } from "next-i18next"
import Link from "next/link"


export default function Example() {

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
        <div className="p-4">
            <div className="group relative">
                <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {i18n?.language}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <nav tabIndex={0}
                     className=" bg-white invisible border-gray-800 shadow-lg rounded w-20 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 z-20">
                    <ul className="py-1">
                        {languages.map(({code, name}) => (
                            <li key={name}>
                                <Link href="/" locale={code}>
                                    <a className='text-gray-700 block px-4 py-2 text-sm'>{name}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
