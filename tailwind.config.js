/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: ({ colors }) => ({
                primary: colors.green[700],
                onPrimary: colors.white,
                danger: colors.red[500],
                onDanger: colors.white,
                success: colors.green[600],
                onSuccess: colors.white,
                warning: colors.yellow[500],
                onWarning: colors.white,
            }),
            borderColor: ({ colors }) => ({
                DEFAULT: colors.zinc[200],
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
    darkMode: 'class',
};
