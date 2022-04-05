<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Set Status - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-20 lg:grid-cols-2">
      <div
        class="col-span-1 space-y-6 self-start rounded-2xl bg-white p-8 shadow-lg"
      >
        <h2 class="text-2xl font-bold text-custom-3">Add colleagues</h2>
        <input
          type="text"
          placeholder="Enter name, email or tag"
          class="w-full rounded-lg border border-custom-2 bg-[#f8f8ff] px-6 py-4 text-lg placeholder:font-medium placeholder:text-custom-3 placeholder:opacity-70"
        />

        <div class="flex justify-end space-x-[11px]">
          <button
            class="rounded-lg border border-custom-2 px-6 py-4 text-lg font-medium text-custom-3"
            >Cancel</button
          >
          <button
            class="rounded-lg bg-custom-1 px-6 py-4 text-lg font-medium text-white"
            >Add</button
          >
        </div>
      </div>

      <div class="col-span-1 mx-auto">
        <button
          class="inline-flex gap-3 rounded-lg border border-custom-1 p-[10px] font-medium text-gray-12"
        >
          <span class="text-lg">In a call</span>
          <Icon id="chevron-down" class="h-6 w-6 text-gray-12" />
        </button>

        <div
          class="mt-2 max-w-[240px] divide-y divide-custom-2 rounded-lg bg-white p-8"
        >
          <ul class="space-y-4">
            <li class="flex items-center gap-2">
              <div class="h-4 w-4 rounded-full bg-[#4AC63F]" />
              <p class="text-lg font-medium text-custom-3">Available</p>
            </li>
            <li class="flex items-center gap-2">
              <div class="h-4 w-4 rounded-full bg-[#F95555]" />
              <p class="text-lg font-medium text-custom-3">Busy</p>
            </li>
            <li class="flex items-center gap-2">
              <div class="h-4 w-4 rounded-full bg-[#F9AD55]" />
              <p class="text-lg font-medium text-custom-3">Appear away</p>
            </li>
            <li class="flex items-center gap-2 pb-4">
              <div class="h-4 w-4 rounded-full bg-[#9B9BC3]" />
              <p class="text-lg font-medium text-custom-3">Appear offline</p>
            </li>
          </ul>
          <p
            class="flex items-center gap-2 py-4 text-lg font-medium text-custom-3"
          >
            <Icon id="clock" class="h-6 w-6 text-custom-3" />
            <span>Duration</span>
          </p>

          <p
            class="flex items-center gap-2 pt-4 text-lg font-medium text-custom-3"
          >
            <Icon id="reset" class="h-6 w-6 text-custom-3" />
            <span>Reset status</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #7758ce;
    --color-2: #dadcf5;
    --color-3: #161842;
  }
</style>
