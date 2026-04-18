export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: "#151F5F",
                    ink: "#091037",
                    red: "#C51A24",
                    paper: "#F6F3EE",
                    mist: "#E9EEF9",
                },
            },
            fontFamily: {
                display: ['"Fraunces"', "serif"],
                sans: ['"Manrope"', "sans-serif"],
            },
            boxShadow: {
                haze: "0 24px 70px rgba(9, 16, 55, 0.16)",
            },
            backgroundImage: {
                mesh: "radial-gradient(circle at top left, rgba(197,26,36,0.18), transparent 24%), radial-gradient(circle at top right, rgba(21,31,95,0.18), transparent 28%), linear-gradient(180deg, #eef2fb 0%, #faf7f2 38%, #f4efe7 100%)",
            },
        },
    },
    plugins: [],
};
