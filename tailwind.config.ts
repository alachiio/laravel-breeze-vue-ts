import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import preLine from 'preline/plugin';
import daisyUI from "daisyui";
import themes from "./resources/js/utils/themes";

/** @type {import('tailwindcss').Config} */
const config : Config = {
    darkMode: ['selector', '[data-theme="dark"]'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/preline/dist/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Figtree',
                    ...defaultTheme.fontFamily.sans
                ],
            }
        },
    },
    daisyui: {
        themes: Object.values(themes),
        darkTheme: "dark",
    },
    plugins: [forms, daisyUI, preLine],
};

export default config;
