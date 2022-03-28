const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        ascent: 'var(--color-ascent)',
        tertiary: 'var(--color-tertiary)',
        'high-contrast': 'var(--text-color-high)',
        'low-contrast': 'var(--text-color-low)',
        gray: {
          1: 'var(--gray1)',
          2: 'var(--gray2)',
          3: 'var(--gray3)',
          4: 'var(--gray4)',
          5: 'var(--gray5)',
          6: 'var(--gray6)',
          7: 'var(--gray7)',
          8: 'var(--gray8)',
          9: 'var(--gray9)',
          10: 'var(--gray10)',
          11: 'var(--gray11)',
          12: 'var(--gray12)',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}

module.exports = config
