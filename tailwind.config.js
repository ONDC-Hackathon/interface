/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'ultra-light': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [],
}
