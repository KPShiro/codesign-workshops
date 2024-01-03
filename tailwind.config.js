/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: ({ colors }) => ({
                primary: colors.indigo,
            }),
            borderColor: ({ colors }) => ({
                DEFAULT: colors.zinc[200],
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
