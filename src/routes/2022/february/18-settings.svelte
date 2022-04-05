<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'
  import clsx from 'clsx'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  const tabs = [
    { name: 'Profile', active: false },
    { name: 'Account', active: true },
    { name: 'Safety&Privacy', active: false },
    { name: 'Feed Settings', active: false },
    { name: 'Notifications', active: false },
  ]
</script>

<svelte:head>
  <title>Settings - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative grid grid-cols-1 items-start gap-10 2xl:min-h-[605px] 2xl:grid-cols-3"
    >
      <div
        class="absolute inset-x-[40%] inset-y-0 -z-10 col-span-3 hidden rounded-2xl bg-[#BCA5FF] 2xl:block"
      />

      <div
        class="mx-auto max-w-fit rounded-2xl bg-white py-4 px-7 shadow-[0_24px_32px_0_#987fdf20] md:py-8 md:px-14 2xl:absolute 2xl:translate-x-80 2xl:translate-y-8"
      >
        <select
          class="w-full rounded-lg md:hidden"
          value={tabs.find((tab) => tab.active === true).name}
        >
          {#each tabs as tab}
            <option value={tab.name}>{tab.name}</option>
          {/each}
        </select>
        <div class="hidden md:flex">
          {#each tabs as tab}
            <div
              class={clsx(
                tab.active ? 'border-custom-1' : 'border-custom-3',
                'border-b-2',
              )}
            >
              <p class="py-[10px] px-4 text-custom-2">{tab.name}</p>
            </div>
          {/each}
        </div>
      </div>

      <div
        class="mx-auto max-w-lg space-y-6 rounded-2xl bg-white py-4 px-7 shadow-[0_16px_43px_0_#BCA5FF10] md:py-8 md:px-14 2xl:absolute 2xl:translate-x-48 2xl:translate-y-64"
      >
        <h2 class="text-xs font-semibold uppercase text-custom-1">
          Account prefferences
        </h2>

        <div class="items-center justify-between gap-4 md:flex">
          <div class="space-y-2">
            <h3 class="text-sm text-custom-1">Email address</h3>
            <p class="text-custom-1">email@address.com</p>
          </div>

          <button
            class="mt-2 w-full rounded-full border border-custom-1 bg-custom-1 py-2 px-6 text-white md:mt-0 md:w-auto"
            >Change</button
          >
        </div>

        <div class="items-center justify-between gap-10 md:flex">
          <div class="space-y-2">
            <h3 class="text-sm text-custom-1">Change password</h3>
            <p class="text-custom-1">
              Password must be at least 8 characters long
            </p>
          </div>

          <button
            class="mt-2 w-full rounded-full border border-custom-1 bg-custom-1 py-2 px-6 text-white md:mt-0 md:w-auto"
            >Change</button
          >
        </div>
      </div>

      <div
        class="mx-auto max-w-lg space-y-6 rounded-2xl bg-white py-4 px-7 shadow-[0_16px_30px_0_#987FDF20] md:py-8 md:px-14 2xl:absolute 2xl:translate-x-[815px] 2xl:translate-y-80"
      >
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <h2 class="font-semibold text-custom-1">Display language Beta</h2>
            <span
              class="rounded-full bg-custom-1 px-2 py-0.5 text-[10px] text-white"
              >Beta</span
            >
          </div>
          <p class="text-sm text-custom-1">
            Select the language you’d like to experience the interface in. Note
            that this won’t change the language of user-generated content.
          </p>
        </div>

        <button
          class="inline-flex items-center gap-[10px] rounded-full border border-custom-1 bg-white py-2 px-6"
        >
          <span class="text-sm text-custom-1">Change</span>
          <Icon id="chevron-down" class="h-5 w-5 text-custom-1" />
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #122156;
    --color-2: #595f78;
    --color-3: #8e97b9;
  }
</style>
