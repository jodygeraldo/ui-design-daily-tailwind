<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import clsx from 'clsx'
  import Icon from '$lib/Icon.svelte'
  import type { IconId } from '$lib/IconType'

  const list: { name: string; iconId: IconId; selected: boolean }[] = [
    { name: 'Overview', iconId: 'home', selected: false },
    { name: 'My files', iconId: 'file-text', selected: true },
    { name: 'Recent', iconId: 'clock', selected: false },
    { name: 'Starred', iconId: 'star', selected: false },
    { name: 'Trash', iconId: 'trash', selected: false },
  ]
</script>

<svelte:head>
  <title>App UI Components - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 2xl:grid-cols-3">
      <div class="relative col-span-1 m-7 self-start">
        <div
          class="absolute -inset-7 -z-10 rounded-[34px] border-2 border-white bg-white/40"
        />
        <div class="rounded-3xl bg-white p-[50px] shadow-xl">
          <div class="flex items-center gap-[14px]">
            <div class="flex h-16 w-16 items-center justify-center">
              <Icon id="github-logo" className="w-12 h-12" />
            </div>
            <h2 class="text-2xl font-bold text-primary">Storage</h2>
          </div>

          <div class="mt-4 space-y-2">
            <div class=" relative h-[9px] w-full rounded-full bg-tertiary">
              <div
                class="absolute top-0 left-0 h-[9px] w-1/6 rounded-full bg-primary bg-black"
              />
              <div class="w-full" />
            </div>
            <p class="text-ascent">384.8 MB of 30 GB used</p>
          </div>

          <button class="mt-9 w-full rounded-md bg-black p-4 text-lg text-white"
            >Buy storage</button
          >
        </div>
      </div>

      <div class="relative col-span-1 m-7 self-start">
        <div
          class="absolute -inset-7 -z-10 rounded-[34px] border-2 border-white bg-white/40"
        />
        <div class="rounded-3xl bg-white p-6 shadow-xl">
          <ul class="space-y-2">
            {#each list as item}
              <li
                class={clsx(
                  item.selected && 'bg-tertiary',
                  'flex items-center space-x-2 rounded-lg p-6',
                )}
              >
                <Icon id={item.iconId} className="h-8 w-8 text-primary" />
                <p class="text-lg text-black">{item.name}</p>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="relative col-span-1 m-7 self-start">
        <div
          class="absolute -inset-7 -z-10 rounded-[34px] border-2 border-white bg-white/40"
        />
        <div class="space-y-8 rounded-3xl bg-white p-[50px] shadow-xl">
          <h2 class="text-2xl font-bold">Preferred Language</h2>

          <div class="space-y-8">
            <div class="flex items-center gap-[113px]">
              <div class="space-y-2">
                <p class="text-lg">English</p>
                <p class="text-lg">United States</p>
              </div>
              <Icon id="pencil-1" className="h-8 w-8 text-primary" />
            </div>
            <div class="flex items-center gap-[113px]">
              <div class="space-y-2">
                <p class="text-lg">English</p>
                <p class="text-lg">United States</p>
              </div>
              <Icon id="pencil-1" className="h-8 w-8 text-primary" />
            </div>
          </div>

          <button
            class="flex w-full justify-center gap-2 rounded-md bg-black p-4 text-lg text-white"
          >
            <Icon id="plus" className="h-8 w-8" />
            <span>Add another language</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #0c0f2b;
    --color-ascent: #494e76;
    --color-tertiary: #edf1ff;
  }
</style>
