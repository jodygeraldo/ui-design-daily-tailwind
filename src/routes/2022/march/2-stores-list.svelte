<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Stores List - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 pt-20 pb-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-md rounded-[18px] bg-custom-2 p-10 text-[#C4C0FF]"
    >
      <div
        class="absolute right-12 -left-16 -top-16 bottom-[60%] -z-10 hidden rounded-tr-3xl rounded-bl-3xl bg-gradient-to-br from-[#FF5DAB] to-[#756BFF] sm:block"
      />
      <div class="space-y-10">
        <h2 class="text-2xl font-bold">Closest stores</h2>

        <div class="space-y-8">
          <div class="space-y-2">
            <h3>Postal code</h3>
            <div class="items-center justify-between gap-5 sm:flex">
              <input
                type="text"
                placeholder="5055"
                class="w-full rounded border border-[#2a2753] bg-transparent p-4 placeholder:text-lg placeholder:font-bold placeholder:text-[#c4c0ff]"
              />
              <button
                class="mt-2 flex min-w-fit flex-1 items-center gap-1.5 text-[#756BFF] sm:mt-0"
              >
                <Icon id="globe" class="h-6 w-6" />
                <p>Use my location</p>
              </button>
            </div>
          </div>

          <div class="space-y-8">
            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-1">
                <h3 class="text-lg font-bold">POINT Bergen Sentrum</h3>
                <span
                  class="rounded-full bg-[#FF5EAB] py-1 px-2 text-xs font-bold uppercase text-white"
                  >Closed</span
                >
              </div>
              <p class="text-lg">Strandagaten 55-57, 6007 Bergen</p>
              <div class="flex items-center gap-2">
                <Icon id="clock" class="h-6 w-6" />
                <span class="text-lg">9:00 - 19:00</span>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between">
                <h3 class="text-lg font-bold">POIVestkanten</h3>
                <span
                  class="rounded-full bg-[#00BD9B] py-1 px-2 text-xs font-bold uppercase text-white"
                  >Open</span
                >
              </div>
              <p class="text-lg">Strandagaten 55-57, 6007 Bergen</p>
              <div class="flex items-center gap-2">
                <Icon id="clock" class="h-6 w-6" />
                <span class="text-lg">9:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <button
          class="w-full rounded bg-custom-1 p-4 text-lg font-bold text-white"
          >View all</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #756bff;
    --color-2: #121129;
  }
</style>
