// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128
import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js,ts,jsx,tsx}',
        './layouts/**/*.{vue,js,ts,jsx,tsx}',
        './pages/**/*.{vue,js,ts,jsx,tsx}',
        './plugins/**/*.{vue,js,ts,jsx,tsx}',
        './nuxt.config.{js,ts}',
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b'
                },
            },
            
            fontFamily: {
                spacegrotesk: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}