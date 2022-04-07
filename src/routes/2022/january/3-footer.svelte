<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
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
    <footer class="rounded-3xl bg-custom-1 p-10 shadow-lg">
      <div class="grid grid-cols-1 gap-x-28 gap-y-4 lg:grid-cols-3">
        <div class="col-span-1">
          <h2 class="font-serif text-[26px] font-extrabold text-custom-3">
            About the store
          </h2>
          <nav class="mt-4">
            <ul class="space-y-2 text-custom-3">
              {#each navLinks as link}
                <li>{link}</li>
              {/each}
            </ul>
          </nav>
        </div>
        <div class="col-span-1">
          <h2 class="font-serif text-[26px] font-extrabold text-custom-3">
            Language
          </h2>
          <ul class="mt-4 flex flex-wrap items-center text-custom-3">
            {#each languages as language}
              <li
                class={`mr-4 py-1 ${
                  language.enabled &&
                  'rounded-md bg-custom-2 px-2 text-custom-3'
                }`}
              >
                {language.name}
              </li>
            {/each}
          </ul>
        </div>
        <div class="col-span-1">
          <h2 class="font-serif text-[26px] font-extrabold text-custom-3">
            Get in touch
          </h2>
          <div class="mt-4 flex gap-6">
            <Icon id="discord-logo" class="h-6 w-6 text-custom-3" />
            <Icon id="github-logo" class="h-6 w-6 text-custom-3" />
            <Icon id="twitter-logo" class="h-6 w-6 text-custom-3" />
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
    --color-1: #1e3161;
    --color-2: #5ac1d8;
    --color-3: #ffffff;
  }
</style>
