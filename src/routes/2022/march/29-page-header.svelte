<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
  import clsx from 'clsx'

  const tabs = [
    { name: 'My parameters', current: true },
    { name: 'Public', current: false },
    { name: 'Configurations', current: false },
  ]
</script>

<svelte:head>
  <title>Page Header - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative rounded-3xl bg-white px-6 py-8 text-custom-1 shadow-[0_51px_93px_0_#0f095309] sm:px-8"
    >
      <div class="sm:flex">
        {#each tabs as tab}
          <button
            class={clsx(
              tab.current ? 'text-custom-1' : 'text-custom-2',
              'relative p-4 font-medium w-full sm:w-auto',
            )}
          >
            <span>
              {tab.name}
            </span>
            {#if tab.current}
              <div
                class="absolute bottom-0 left-0 h-1 w-full rounded-full bg-custom-1"
              />
            {/if}
          </button>
        {/each}
      </div>

      <div class="mt-8 md:flex items-center justify-between">
        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">My Parameters</h2>

        <div class="sm:flex items-center gap-2 mt-4 md:mt-0">
          <button
            class="flex justify-center items-center gap-2 rounded-lg border border-custom-3 p-4 w-full sm:w-auto mt-2 sm:mt-0"
          >
            <Icon id="pencil-1" class="h-7 w-7 text-custom-1" />
            <span class="font-medium">Edit</span>
          </button>

          <button
            class="flex justify-center items-center gap-2 rounded-lg border border-custom-3 p-4 w-full sm:w-auto mt-2 sm:mt-0"
          >
            <Icon id="trash" class="h-7 w-7 text-custom-1" />
            <span class="font-medium">Delete</span>
          </button>

          <button
            class="rounded-lg border border-custom-3 bg-custom-1 p-4 w-full sm:w-auto mt-2 sm:mt-0"
          >
            <span class="font-medium text-white">Create parameter</span>
          </button>
        </div>
      </div>

      <div class="mt-10 sm:flex items-center gap-5">
        <div class="relative flex-1">
          <Icon
            id="magnifying-glass"
            class="absolute top-1/2 bottom-1/2 left-4 h-7 w-7 -translate-y-1/2 text-custom-1"
          />
          <input
            type="text"
            class="w-full rounded-lg border border-custom-3 p-4 pl-12 placeholder:font-medium placeholder:text-custom-2"
            placeholder="Search"
          />
        </div>

        <div class="flex items-center gap-5">
          <div class="flex items-center gap-2 py-4 sm:px-4">
            <button>
              <Icon id="chevron-left" class="h-7 w-7 text-custom-1" />
            </button>
            <p class="font-medium">1</p>
            <button>
              <Icon id="chevron-right" class="h-7 w-7 text-custom-1" />
            </button>
          </div>

          <button class="p-4">
            <Icon id="gear" class="h-7 w-7 text-custom-1" />
          </button>
        </div>
      </div>

      <div class="mt-4 sm:flex gap-1.5">
        <div
          class="flex items-center gap-4 rounded-lg border border-custom-1 p-2 justify-between"
        >
          <p class="text-sm font-semibold">Name: contains: auth0</p>
          <Icon id="cross-2" class="h-7 w-7 text-custom-1" />
        </div>

        <div
          class="mt-2 sm:mt-0 flex items-center rounded-lg border border-custom-3 px-4 py-2"
        >
          <p class="text-sm font-medium">Clear filters</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #0d2167;
    --color-2: #5a6793;
    --color-3: #c6cce0;
  }
</style>
