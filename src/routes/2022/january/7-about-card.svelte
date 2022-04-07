<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'

  const people = [
    { name: 'Mary Massis', imageUrl: 'person-1.png' },
    { name: 'Daria Nati', imageUrl: 'person-2.png' },
    { name: 'Lisa Kruckova', imageUrl: 'person-3.png' },
  ]
</script>

<svelte:head>
  <title>About Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-xl space-y-8 rounded-3xl bg-white p-[70px]">
      <div class="space-y-2">
        <h2 class="text-[32px] font-bold text-custom-1">About</h2>
        <div class="flex items-center justify-between">
          <p class="text-lg font-medium text-custom-1">Members (2,778)</p>
          <button
            class="rounded border border-[#BBC2FF] px-4 py-2 text-custom-2"
            >Import</button
          >
        </div>
      </div>

      <div>
        <Icon
          id="magnifying-glass"
          class="absolute mt-3 ml-2 h-9 w-9 opacity-50"
        />
        <input
          type="search"
          class="w-full rounded-lg border border-[#b4bed0] py-4 pl-12 pr-4 text-lg font-medium placeholder:text-custom-1 placeholder:opacity-50"
          placeholder="Find and add people"
        />
      </div>

      <div class="space-y-2">
        <p class="text-lg font-medium text-custom-1">
          Share an invitation link
        </p>
        <div
          class="flex w-full items-center justify-between gap-4 rounded-lg border border-[#b4bed0] p-4"
        >
          <span class="w-0 flex-1 truncate text-lg font-medium text-custom-1">
            https://work.me/g/sajhsjhazyaL
          </span>
          <Icon id="copy" class="h-8 w-8 text-custom-1" />
        </div>
      </div>

      <div class="space-y-8 sm:space-y-4">
        <p class="text-lg font-medium text-custom-1">Suggested Members</p>
        {#each people as person}
          <div class="items-center justify-between sm:flex">
            <div class="flex items-center gap-4">
              <img
                class="h-20 w-20 rounded-full"
                src={`/assets/images/${person.imageUrl}`}
                alt=""
              />
              <p class="text-2xl font-medium text-custom-1">{person.name}</p>
            </div>
            <button
              class="mt-4 flex w-full items-center justify-center gap-[10px] rounded bg-custom-1 px-4 py-2 text-white sm:mt-0 sm:w-auto"
            >
              <Icon id="plus" class="h-5 w-5" />
              <span>Add</span>
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #111831;
    --color-2: #5c69e1;
  }
</style>
