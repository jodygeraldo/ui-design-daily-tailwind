const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        custom: {
          1: 'var(--color-1)',
          2: 'var(--color-2)',
          3: 'var(--color-3)',
          4: 'var(--color-4)',
          5: 'var(--color-5)',
          6: 'var(--color-6)',
          7: 'var(--color-7)',
          8: 'var(--color-8)',
          9: 'var(--color-9)',
        },
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
