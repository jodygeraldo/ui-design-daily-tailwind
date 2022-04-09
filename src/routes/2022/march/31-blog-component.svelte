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
    <div class="xl:flex gap-10 items-start">
      <div
        class="rounded-xl bg-custom-2 px-6 py-8 text-custom-1 sm:px-8 border-[12px] border-white max-w-2xl mx-auto shadow-[0_56px_84px_0_#7a3aad15]"
      >
        <h2 class="font-serif font-bold text-xl sm:text-2xl">Tags</h2>

        <div class="mt-4 flex gap-4 flex-wrap">
          {#each tags as tag}
            <span
              class={clsx(
                tag.active ? 'bg-custom-1 text-white' : 'bg-white',
                'px-4 py-2 inline-block rounded-2xl',
              )}>{tag.name}</span
            >
          {/each}
        </div>
      </div>

      <div
        class="mt-10 rounded-xl bg-custom-2 px-6 py-8 text-custom-1 sm:px-8 border-[12px] border-white max-w-xl mx-auto shadow-[0_56px_84px_0_#7a3aad15] sm:flex items-center gap-4"
      >
        <div class="relative flex-1">
          <Icon
            id="magnifying-glass"
            class="absolute top-1/2 bottom-1/2 left-4 h-7 w-7 -translate-y-1/2 text-custom-1"
          />
          <input
            type="text"
            class="w-full rounded-2xl bg-white border-none p-4 pl-12 sm:pl-16 placeholder:text-custom-1"
            placeholder="Search articles, topics , etc."
          />
        </div>

        <button
          class="mt-4 sm:mt-0 bg-custom-1 text-white px-6 py-4 w-full sm:max-w-fit rounded-2xl"
          >Search</button
        >
      </div>
    </div>

    <div
      class="mt-10 rounded-xl bg-custom-2 px-6 py-8 text-custom-1 sm:px-8 border-[12px] border-white max-w-lg mx-auto shadow-[0_56px_84px_0_#7a3aad15]"
    >
      <h2 class="font-serif font-bold text-xl sm:text-2xl">Recent posts</h2>

      <div class="mt-4 space-y-4">
        {#each posts as post}
          <div
            class={clsx(
              post.selected && 'bg-white',
              'px-4 py-2 rounded-2xl font-semibold sm:text-lg',
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
