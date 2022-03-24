const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        ascent: 'var(--color-ascent)',
        'high-contrast': 'var(--text-color-high)',
        'low-contrast': 'var(--text-color-low)',
      },
    },
  },

  plugins: [],
}

module.exports = config
