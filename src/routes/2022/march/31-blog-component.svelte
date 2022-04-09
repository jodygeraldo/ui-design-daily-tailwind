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

  const tags = [
    { name: 'Blender', active: false },
    { name: 'Browser', active: false },
    { name: 'cross-platform', active: false },
    { name: 'HoloLens', active: false },
    { name: 'Microsoft', active: false },
    { name: 'Mixed Reality', active: false },
    { name: 'modelling', active: true },
    { name: 'MR', active: false },
    { name: 'nodejs', active: false },
    { name: 'streamsocket', active: false },
    { name: 'unity', active: false },
    { name: 'unity3D', active: false },
    { name: 'unreal engine', active: false },
    { name: 'VR', active: false },
    { name: 'websockets', active: false },
  ]

  const posts = [
    { name: 'Azure Speech Studio for Mixed Reality', selected: false },
    { name: 'HoloLens 2 Unreal Project Template', selected: true },
    { name: 'Simplygon in Azure', selected: false },
    { name: 'Blender in Azure', selected: false },
    { name: 'AAD Login on HoloLens 2', selected: false },
  ]
</script>

<svelte:head>
  <title>Blog Component - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="items-start gap-10 xl:flex">
      <div
        class="mx-auto max-w-2xl rounded-xl border-[12px] border-white bg-custom-2 px-6 py-8 text-custom-1 shadow-[0_56px_84px_0_#7a3aad15] sm:px-8"
      >
        <h2 class="font-serif text-xl font-bold sm:text-2xl">Tags</h2>

        <div class="mt-4 flex flex-wrap gap-4">
          {#each tags as tag}
            <span
              class={clsx(
                tag.active ? 'bg-custom-1 text-white' : 'bg-white',
                'inline-block rounded-2xl px-4 py-2',
              )}>{tag.name}</span
            >
          {/each}
        </div>
      </div>

      <div
        class="mx-auto mt-10 max-w-xl items-center gap-4 rounded-xl border-[12px] border-white bg-custom-2 px-6 py-8 text-custom-1 shadow-[0_56px_84px_0_#7a3aad15] sm:flex sm:px-8"
      >
        <div class="relative flex-1">
          <Icon
            id="magnifying-glass"
            class="absolute top-1/2 bottom-1/2 left-4 h-7 w-7 -translate-y-1/2 text-custom-1"
          />
          <input
            type="text"
            class="w-full rounded-2xl border-none bg-white p-4 pl-12 placeholder:text-custom-1 sm:pl-16"
            placeholder="Search articles, topics , etc."
          />
        </div>

        <button
          class="mt-4 w-full rounded-2xl bg-custom-1 px-6 py-4 text-white sm:mt-0 sm:max-w-fit"
          >Search</button
        >
      </div>
    </div>

    <div
      class="mx-auto mt-10 max-w-lg rounded-xl border-[12px] border-white bg-custom-2 px-6 py-8 text-custom-1 shadow-[0_56px_84px_0_#7a3aad15] sm:px-8"
    >
      <h2 class="font-serif text-xl font-bold sm:text-2xl">Recent posts</h2>

      <div class="mt-4 space-y-4">
        {#each posts as post}
          <div
            class={clsx(
              post.selected && 'bg-white',
              'rounded-2xl px-4 py-2 font-semibold sm:text-lg',
            )}
          >
            {post.name}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #1a2653;
    --color-2: #f1e2f5;
  }
</style>
