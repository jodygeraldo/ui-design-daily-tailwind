<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Dropdown - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto py-4 px-6 lg:px-8">
    <div
      class="relative mx-auto hidden h-80 max-w-xs items-center rounded-2xl bg-custom-2 sm:flex sm:h-80 sm:w-80"
    >
      <div
        class="absolute right-1/2 bottom-1/2 flex translate-x-1/2 gap-1 rounded-xl bg-custom-4 p-8 sm:h-[120px] sm:w-[570px]"
      >
        <div class="relative">
          <button class="flex items-center gap-1 rounded-lg bg-custom-3 p-4">
            <p class="text-custom-1">Templates</p>
            <Icon id="chevron-up" class="h-4 w-4 text-custom-1" />
          </button>

          <div
            class="absolute right-0 mt-1 w-[152px] rounded-2xl bg-white p-4 shadow-[0_16px_15px_0_#11103c10]"
          >
            <p class="p-4 text-custom-1">All Products</p>
            <p class="p-4 text-custom-1">Photos</p>
            <p class="p-4 text-custom-1">Graphics</p>
            <p class="rounded-lg bg-custom-3 p-4 text-custom-1">Templates</p>
            <p class="p-4 text-custom-1">PLugins</p>
          </div>
        </div>

        <div class="relative flex-1">
          <Icon
            id="magnifying-glass"
            class="absolute left-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-1/2 text-custom-1"
          />
          <input
            type="search"
            placeholder="Search apps, plugins and more"
            class="w-full border-none bg-white p-4 pl-12 placeholder-custom-1"
          />
        </div>
      </div>
    </div>

    <div class="w-full rounded-xl bg-custom-4 p-4 sm:hidden">
      <div class="relative">
        <Icon
          id="magnifying-glass"
          class="absolute left-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-1/2 text-custom-1"
        />
        <input
          type="search"
          placeholder="Search apps, plugins and more"
          class="w-full truncate border-none bg-white p-4 pl-12 placeholder-custom-1"
        />
      </div>

      <div class="relative mt-2 max-w-fit">
        <button class="flex items-center gap-1 rounded-lg bg-custom-3 p-4">
          <p class="text-custom-1">Templates</p>
          <Icon id="chevron-up" class="h-4 w-4 text-custom-1" />
        </button>

        <div
          class="absolute right-0 mt-1 w-[152px] rounded-2xl bg-white p-4 shadow-[0_16px_15px_0_#11103c10]"
        >
          <p class="p-4 text-custom-1">All Products</p>
          <p class="p-4 text-custom-1">Photos</p>
          <p class="p-4 text-custom-1">Graphics</p>
          <p class="rounded-lg bg-custom-3 p-4 text-custom-1">Templates</p>
          <p class="p-4 text-custom-1">PLugins</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #11103c;
    --color-2: #99a8ff;
    --color-3: #edeffb;
    --color-4: #fafaff;
  }
</style>
