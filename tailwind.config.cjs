const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        app: '#838faa',
        primary: 'var(--color-primary)',
        ascent: 'var(--color-ascent)',
        tertiary: 'var(--color-tertiary)',
        'high-contrast': 'var(--text-color-high)',
        'low-contrast': 'var(--text-color-low)',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}

module.exports = config
