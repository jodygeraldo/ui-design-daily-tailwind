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

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
    <div
      class="rounded-[18px] p-10 max-w-md mx-auto bg-ascent text-[#C4C0FF] relative"
    >
      <div
        class="hidden sm:block absolute right-12 -left-16 -top-16 bottom-[60%] bg-gradient-to-br from-[#FF5DAB] to-[#756BFF] -z-10 rounded-tr-3xl rounded-bl-3xl"
      />
      <div class="space-y-10">
        <h2 class="font-bold text-2xl">Closest stores</h2>

        <div class="space-y-8">
          <div class="space-y-2">
            <h3>Postal code</h3>
            <div class="sm:flex gap-5 items-center justify-between">
              <input
                type="text"
                placeholder="5055"
                class="border p-4 border-[#2a2753] placeholder:text-[#c4c0ff] placeholder:text-lg placeholder:font-bold bg-transparent rounded w-full"
              />
              <button
                class="mt-2 sm:mt-0 flex flex-1 gap-1.5 items-center min-w-fit text-[#756BFF]"
              >
                <Icon id="globe" class="w-6 h-6" />
                <p>Use my location</p>
              </button>
            </div>
          </div>

          <div class="space-y-8">
            <div class="space-y-3">
              <div class="flex justify-between items-center gap-1 flex-wrap">
                <h3 class="font-bold text-lg">POINT Bergen Sentrum</h3>
                <span
                  class="uppercase py-1 px-2 bg-[#FF5EAB] text-white text-xs font-bold rounded-full"
                  >Closed</span
                >
              </div>
              <p class="text-lg">Strandagaten 55-57, 6007 Bergen</p>
              <div class="flex gap-2 items-center">
                <Icon id="clock" class="w-6 h-6" />
                <span class="text-lg">9:00 - 19:00</span>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex flex-wrap justify-between items-center">
                <h3 class="font-bold text-lg">POIVestkanten</h3>
                <span
                  class="uppercase py-1 px-2 bg-[#00BD9B] text-white text-xs font-bold rounded-full"
                  >Open</span
                >
              </div>
              <p class="text-lg">Strandagaten 55-57, 6007 Bergen</p>
              <div class="flex gap-2 items-center">
                <Icon id="clock" class="w-6 h-6" />
                <span class="text-lg">9:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <button
          class="bg-primary text-white w-full p-4 rounded font-bold text-lg"
          >View all</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #756bff;
    --color-ascent: #121129;
  }
</style>
