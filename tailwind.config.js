/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        colors: {
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
        },
        extend: {
            fontSize: {
                h1: '1.5rem',
                h2: '1.375rem',
                h3: '1.25rem',
                h5: '1.125rem',
                h4: '1.2rem',
                h6: '1rem',
            },
            backgroundColor: {
                disabled: 'var(--color-background-disabled)',
                surface: {
                    default: 'var(--color-background-surface-default)',
                    hovered: 'var(--color-background-surface-hovered)',
                    pressed: 'var(--color-background-surface-pressed)',
                    sunken: {
                        default: 'var(--color-background-surface-sunken-default)',
                        hovered: 'var(--color-background-surface-sunken-hovered)',
                        pressed: 'var(--color-background-surface-sunken-pressed)',
                    },
                    raised: {
                        default: 'var(--color-background-surface-raised-default)',
                        hovered: 'var(--color-background-surface-raised-hovered)',
                        pressed: 'var(--color-background-surface-raised-pressed)',
                    },
                    overlay: {
                        default: 'var(--color-background-surface-overlay-default)',
                        hovered: 'var(--color-background-surface-overlay-hovered)',
                        pressed: 'var(--color-background-surface-overlay-pressed)',
                    },
                },
                inversed: {
                    default: 'var(--color-background-inversed-default)',
                    hovered: 'var(--color-background-inversed-hovered)',
                    pressed: 'var(--color-background-inversed-pressed)',
                },
                input: {
                    default: 'var(--color-background-input-default)',
                    hovered: 'var(--color-background-input-hovered)',
                    pressed: 'var(--color-background-input-pressed)',
                },
                neutral: {
                    default: 'var(--color-background-neutral-default)',
                    hovered: 'var(--color-background-neutral-hovered)',
                    pressed: 'var(--color-background-neutral-pressed)',
                    subtle: {
                        default: 'var(--color-background-neutral-subtle-default)',
                        hovered: 'var(--color-background-neutral-subtle-hovered)',
                        pressed: 'var(--color-background-neutral-subtle-pressed)',
                    },
                    bold: {
                        default: 'var(--color-background-neutral-bold-default)',
                        hovered: 'var(--color-background-neutral-bold-hovered)',
                        pressed: 'var(--color-background-neutral-bold-pressed)',
                    },
                },
                brand: {
                    default: 'var(--color-background-brand-default)',
                    hovered: 'var(--color-background-brand-hovered)',
                    pressed: 'var(--color-background-brand-pressed)',
                    bold: {
                        default: 'var(--color-background-brand-bold-default)',
                        hovered: 'var(--color-background-brand-bold-hovered)',
                        pressed: 'var(--color-background-brand-bold-pressed)',
                    },
                },
                danger: {
                    default: 'var(--color-background-danger-default)',
                    hovered: 'var(--color-background-danger-hovered)',
                    pressed: 'var(--color-background-danger-pressed)',
                    bold: {
                        default: 'var(--color-background-danger-bold-default)',
                        hovered: 'var(--color-background-danger-bold-hovered)',
                        pressed: 'var(--color-background-danger-bold-pressed)',
                    },
                },
                warning: {
                    default: 'var(--color-background-warning-default)',
                    hovered: 'var(--color-background-warning-hovered)',
                    pressed: 'var(--color-background-warning-pressed)',
                    bold: {
                        default: 'var(--color-background-warning-bold-default)',
                        hovered: 'var(--color-background-warning-bold-hovered)',
                        pressed: 'var(--color-background-warning-bold-pressed)',
                    },
                },
                success: {
                    default: 'var(--color-background-success-default)',
                    hovered: 'var(--color-background-success-hovered)',
                    pressed: 'var(--color-background-success-pressed)',
                    bold: {
                        default: 'var(--color-background-success-bold-default)',
                        hovered: 'var(--color-background-success-bold-hovered)',
                        pressed: 'var(--color-background-success-bold-pressed)',
                    },
                },
                info: {
                    default: 'var(--color-background-info-default)',
                    hovered: 'var(--color-background-info-hovered)',
                    pressed: 'var(--color-background-info-pressed)',
                    bold: {
                        default: 'var(--color-background-info-bold-default)',
                        hovered: 'var(--color-background-info-bold-hovered)',
                        pressed: 'var(--color-background-info-bold-pressed)',
                    },
                },
            },
            textColor: {
                default: 'var(--color-text-default)',
                subtle: 'var(--color-text-subtle)',
                subtlest: 'var(--color-text-subtlest)',
                inversed: 'var(--color-text-inversed)',
                disabled: 'var(--color-text-disabled)',
                brand: 'var(--color-text-brand)',
                danger: 'var(--color-text-danger)',
                warning: 'var(--color-text-warning)',
                success: 'var(--color-text-success)',
                info: 'var(--color-text-info)',
                accent: {
                    red: {
                        default: 'var(--color-text-accent-red-default)',
                        bolder: 'var(--color-text-accent-red-bolder)',
                    },
                    orange: {
                        default: 'var(--color-text-accent-orange-default)',
                        bolder: 'var(--color-text-accent-orange-bolder)',
                    },
                    yellow: {
                        default: 'var(--color-text-accent-yellow-default)',
                        bolder: 'var(--color-text-accent-yellow-bolder)',
                    },
                    green: {
                        default: 'var(--color-text-accent-green-default)',
                        bolder: 'var(--color-text-accent-green-bolder)',
                    },
                    blue: {
                        default: 'var(--color-text-accent-blue-default)',
                        bolder: 'var(--color-text-accent-blue-bolder)',
                    },
                    purple: {
                        default: 'var(--color-text-accent-purple-default)',
                        bolder: 'var(--color-text-accent-purple-bolder)',
                    },
                },
                icon: {
                    default: 'var(--color-icon-default)',
                    subtle: 'var(--color-icon-subtle)',
                    subtlest: 'var(--color-icon-subtlest)',
                    inversed: 'var(--color-icon-inversed)',
                    disabled: 'var(--color-icon-disabled)',
                    brand: 'var(--color-icon-brand)',
                    danger: 'var(--color-icon-danger)',
                    warning: 'var(--color-icon-warning)',
                    success: 'var(--color-icon-success)',
                    info: 'var(--color-icon-info)',
                },
                link: {
                    default: 'var(--color-link-default)',
                    pressed: 'var(--color-link-pressed)',
                },
            },
            borderColor: {
                default: 'var(--color-border-default)',
                focused: 'var(--color-border-focused)',
                disabled: 'var(--color-border-disabled)',
                brand: 'var(--color-border-brand)',
                danger: 'var(--color-border-danger)',
                warning: 'var(--color-border-warning)',
                success: 'var(--color-border-success)',
                info: 'var(--color-border-info)',
            },
            outlineColor: {
                default: 'var(--color-border-default)',
                focused: 'var(--color-border-focused)',
                disabled: 'var(--color-border-disabled)',
                brand: 'var(--color-border-brand)',
                danger: 'var(--color-border-danger)',
                warning: 'var(--color-border-warning)',
                success: 'var(--color-border-success)',
                info: 'var(--color-border-info)',
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
