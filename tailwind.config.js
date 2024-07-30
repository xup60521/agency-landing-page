/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Soft_red: "hsl(7, 99%, 70%)",
                c_Yellow: "hsl(51, 100%, 49%)",
                c_Dark_desaturated_cyan: "hsl(167, 40%, 24%)",
                c_Dark_blue: "hsl(198, 62%, 26%)",
                c_Dark_moderate_cyan: "hsl(168, 34%, 41%)",
                c_Very_dark_desaturated_blue: "hsl(212, 27%, 19%)",
                c_Very_dark_grayish_blue: "hsl(213, 9%, 39%)",
                c_Dark_grayish_blue: "hsl(232, 10%, 55%)",
                c_Grayish_blue: "hsl(210, 4%, 67%)",
            },
            fontFamily: {
                barlow: ["Barlow", "sans-serif"],
                frounces: ["Fraunces", "serif"]
            }
        },
    },
    plugins: [],
}

