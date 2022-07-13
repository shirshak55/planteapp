module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Nunito", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont"],
        },
    },
    variants: {
        extend: {},
    },
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}
