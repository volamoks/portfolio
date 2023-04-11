/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                woodsmoke: {
                    50: '#f7f6f7',
                    100: '#e3e1e6',
                    200: '#c6c2cd',
                    300: '#a29cac',
                    400: '#7f778a',
                    500: '#645c70',
                    600: '#4f4859',
                    700: '#423c49',
                    800: '#37333c',
                    900: '#312d34',
                    1000: '#0a090b',
                },
            },
        },
    },

    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],

    plugins: [require('flowbite/plugin')],
};
