/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: ({ colors }) => ({
                primary: colors.blue,
            }),
            borderColor: ({ colors }) => ({
                DEFAULT: colors.zinc[900],
            }),
            borderWidth: {
                DEFAULT: '2px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
    darkMode: 'class',
};
