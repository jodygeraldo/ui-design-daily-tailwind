<script>
  import Icon from '/src/components/Icon.svelte'

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

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <footer class="bg-primary p-10 rounded-3xl shadow-lg">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-28 gap-y-4">
        <div class="col-span-1">
          <h2 class="font-extrabold text-[26px] text-high-contrast font-serif">
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
          <h2 class="font-extrabold text-[26px] text-high-contrast font-serif">
            Language
          </h2>
          <ul class="mt-4 text-high-contrast flex flex-wrap items-center">
            {#each languages as language}
              <li
                class={`mr-4 py-1 ${
                  language.enabled &&
                  'bg-ascent px-2 rounded-md text-high-contrast'
                }`}
              >
                {language.name}
              </li>
            {/each}
          </ul>
        </div>
        <div class="col-span-1">
          <h2 class="font-extrabold text-[26px] text-high-contrast font-serif">
            Get in touch
          </h2>
          <div class="flex gap-6 mt-4">
            <Icon id="discord" className="w-6 h-6 text-high-contrast" />
            <Icon id="github" className="w-6 h-6 text-high-contrast" />
            <Icon id="twitter" className="w-6 h-6 text-high-contrast" />
          </div>
        </div>
      </div>
      <ul class="mt-2 flex p-[10px] space-x-[10px] justify-center flex-wrap">
        {#each others as other}
          <li class="text-white font-medium text-lg opacity-50">{other}</li>
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
