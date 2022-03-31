<script>
  import Icon from '$lib/Icon.svelte'

  const navLinks = [
    'Home',
    'Become a customer',
    'About us',
    'FAQ',
    'Return policy',
    'Contact us',
  ]

  const languages = [
    { name: 'Deutsch', enabled: false },
    { name: 'English', enabled: true },
    { name: 'Español', enabled: false },
    { name: 'Français', enabled: false },
    { name: 'Indonesian', enabled: false },
    { name: 'Italian', enabled: false },
    { name: 'Nederlands', enabled: false },
    { name: 'Polnisch', enabled: false },
    { name: 'Português', enabled: false },
    { name: 'русский', enabled: false },
    { name: 'Tiếng Việt', enabled: false },
    { name: 'Türkçe', enabled: false },
  ]

  const others = ['Terms of purchase', 'Security and privacy', 'Newsletter']
</script>

<svelte:head>
  <title>Footer - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <footer class="rounded-3xl bg-primary p-10 shadow-lg">
      <div class="grid grid-cols-1 gap-x-28 gap-y-4 lg:grid-cols-3">
        <div class="col-span-1">
          <h2 class="font-serif text-[26px] font-extrabold text-high-contrast">
            About the store
          </h2>
          <nav class="mt-4">
            <ul class="space-y-2 text-high-contrast">
              {#each navLinks as link}
                <li>{link}</li>
              {/each}
            </ul>
          </nav>
        </div>
        <div class="col-span-1">
          <h2 class="font-serif text-[26px] font-extrabold text-high-contrast">
            Language
          </h2>
          <ul class="mt-4 flex flex-wrap items-center text-high-contrast">
            {#each languages as language}
              <li
                class={`mr-4 py-1 ${
                  language.enabled &&
                  'rounded-md bg-ascent px-2 text-high-contrast'
                }`}
              >
                {language.name}
              </li>
            {/each}
          </ul>
        </div>
        <div class="col-span-1">
          <h2 class="font-serif text-[26px] font-extrabold text-high-contrast">
            Get in touch
          </h2>
          <div class="mt-4 flex gap-6">
            <Icon id="discord-logo" className="w-6 h-6 text-high-contrast" />
            <Icon id="github-logo" className="w-6 h-6 text-high-contrast" />
            <Icon id="twitter-logo" className="w-6 h-6 text-high-contrast" />
          </div>
        </div>
      </div>
      <ul class="mt-2 flex flex-wrap justify-center space-x-[10px] p-[10px]">
        {#each others as other}
          <li class="text-lg font-medium text-white opacity-50">{other}</li>
        {/each}
      </ul>
    </footer>
  </div>
</div>

<style>
  .theme {
    --color-primary: #1e3161;
    --color-ascent: #5ac1d8;
    --text-color-high: #ffffff;
    --text-color-low: #838faa;
  }
</style>
