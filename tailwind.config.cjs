const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        app: '#838faa',
        primary: 'var(--color-primary)',
        ascent: 'var(--color-ascent)',
        gray: 'var(--color-gray)',
        'high-contrast': 'var(--text-color-high)',
        'low-contrast': 'var(--text-color-low)',
      },
    },
  },

  plugins: [],
}

module.exports = config
