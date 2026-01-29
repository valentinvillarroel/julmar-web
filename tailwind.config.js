/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Barlow', 'sans-serif'],
            },
            colors: {
                'julmar-dark': '#0B2427', // Deep industrial teal/cyan
                'julmar-green': '#A3E635', // Vibrant lime green
                'julmar-green-light': '#BEF264',
            },
        },
    },
    plugins: [],
}
