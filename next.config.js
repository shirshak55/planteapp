/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-right",
    },
    swcMinify: false,

    i18n: {
        locales: ["en", "pyc", "de", "el", "pl"],
        defaultLocale: "en",
    },
}
