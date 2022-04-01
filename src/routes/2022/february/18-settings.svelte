<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'
  import clsx from 'clsx'
  import { each } from 'svelte/internal'

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
                tab.active ? 'border-primary' : 'border-tertiary',
                'border-b-2',
              )}
            >
              <p class="py-[10px] px-4 text-ascent">{tab.name}</p>
            </div>
          {/each}
        </div>
      </div>

      <div
        class="mx-auto max-w-lg space-y-6 rounded-2xl bg-white py-4 px-7 shadow-[0_16px_43px_0_#BCA5FF10] md:py-8 md:px-14 2xl:absolute 2xl:translate-x-48 2xl:translate-y-64"
      >
        <h2 class="text-xs font-semibold uppercase text-primary">
          Account prefferences
        </h2>

        <div class="items-center justify-between gap-4 md:flex">
          <div class="space-y-2">
            <h3 class="text-sm text-primary">Email address</h3>
            <p class="text-primary">email@address.com</p>
          </div>

          <button
            class="mt-2 w-full rounded-full border border-primary bg-primary py-2 px-6 text-white md:mt-0 md:w-auto"
            >Change</button
          >
        </div>

        <div class="items-center justify-between gap-10 md:flex">
          <div class="space-y-2">
            <h3 class="text-sm text-primary">Change password</h3>
            <p class="text-primary">
              Password must be at least 8 characters long
            </p>
          </div>

          <button
            class="mt-2 w-full rounded-full border border-primary bg-primary py-2 px-6 text-white md:mt-0 md:w-auto"
            >Change</button
          >
        </div>
      </div>

      <div
        class="mx-auto max-w-lg space-y-6 rounded-2xl bg-white py-4 px-7 shadow-[0_16px_30px_0_#987FDF20] md:py-8 md:px-14 2xl:absolute 2xl:translate-x-[815px] 2xl:translate-y-80"
      >
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <h2 class="font-semibold text-primary">Display language Beta</h2>
            <span
              class="rounded-full bg-primary px-2 py-0.5 text-[10px] text-white"
              >Beta</span
            >
          </div>
          <p class="text-sm text-primary">
            Select the language you’d like to experience the interface in. Note
            that this won’t change the language of user-generated content.
          </p>
        </div>

        <button
          class="inline-flex items-center gap-[10px] rounded-full border border-primary bg-white py-2 px-6"
        >
          <span class="text-sm text-primary">Change</span>
          <Icon id="chevron-down" className="w-5 h-5 text-primary" />
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #122156;
    --color-ascent: #595f78;
    --color-tertiary: #8e97b9;
  }
</style>
