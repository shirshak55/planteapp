/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-right",
    },
    swcMinify: false,

    i18n
}
