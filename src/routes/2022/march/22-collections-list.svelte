<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Collections List - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="rounded-3xl bg-custom-3 px-6 py-8 shadow-[0_76px_27px_0_#061b5210] lg:p-10 xl:p-12"
    >
      <div>
        <h2 class="text-3xl font-bold text-custom-1">Popular Collections</h2>
        <div class="mt-6 flex flex-wrap items-center gap-2">
          <span
            class="inline-block rounded-lg bg-white p-2 font-medium text-custom-1"
            >Profile</span
          >
          <span
            class="inline-block rounded-lg bg-white p-2 font-medium text-custom-1"
            >New York</span
          >
          <span
            class="inline-block rounded-lg bg-white p-2 font-medium text-custom-1"
            >Relaxing</span
          >
          <span
            class="inline-block rounded-lg bg-white p-2 font-medium text-custom-1"
            >Person</span
          >
          <span
            class="inline-block rounded-lg bg-white p-2 font-medium text-custom-1"
            >Fashion</span
          >
        </div>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div class="col-span-1 rounded-lg bg-white p-4 sm:p-6 md:rounded-2xl">
          <div class="grid grid-cols-3 gap-4">
            <img
              src="/assets/images/card1-1.png"
              alt=""
              class="col-span-3 rounded-lg md:rounded-2xl"
            />

            <img
              src="/assets/images/card1-2.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
            <img
              src="/assets/images/card1-3.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
            <img
              src="/assets/images/card1-4.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
          </div>

          <div class="mt-4 flex items-center justify-between gap-4 sm:mt-6">
            <h3 class="text-lg font-medium text-custom-1 md:text-2xl">
              People
            </h3>
            <div class="flex items-center gap-1">
              <Icon id="image" class="h-7 w-7 text-custom-2" />
              <p class="font-medium text-custom-1">144</p>
            </div>
          </div>
        </div>

        <div class="col-span-1 rounded-lg bg-white p-4 sm:p-6 md:rounded-2xl">
          <div class="grid grid-cols-3 gap-4">
            <img
              src="/assets/images/card2-1.png"
              alt=""
              class="col-span-3 rounded-lg md:rounded-2xl"
            />

            <img
              src="/assets/images/card2-2.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
            <img
              src="/assets/images/card2-3.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
            <img
              src="/assets/images/card2-4.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
          </div>

          <div class="mt-4 flex items-center justify-between gap-4 sm:mt-6">
            <h3 class="text-lg font-medium text-custom-1 md:text-2xl">
              Nature
            </h3>
            <div class="flex items-center gap-1">
              <Icon id="image" class="h-7 w-7 text-custom-2" />
              <p class="font-medium text-custom-1">7K</p>
            </div>
          </div>
        </div>

        <div class="col-span-1 rounded-lg bg-white p-4 sm:p-6 md:rounded-2xl">
          <div class="grid grid-cols-3 gap-4">
            <img
              src="/assets/images/card3-1.png"
              alt=""
              class="col-span-3 rounded-lg md:rounded-2xl"
            />

            <img
              src="/assets/images/card3-2.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
            <img
              src="/assets/images/card3-3.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
            <img
              src="/assets/images/card3-4.png"
              alt=""
              class="col-span-1 rounded-lg md:rounded-2xl"
            />
          </div>

          <div class="mt-4 flex items-center justify-between gap-4 sm:mt-6">
            <h3 class="text-lg font-medium text-custom-1 md:text-2xl">
              History
            </h3>
            <div class="flex items-center gap-1">
              <Icon id="image" class="h-7 w-7 text-custom-2" />
              <p class="font-medium text-custom-1">431</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #0e0e38;
    --color-2: #2c3e50;
    --color-3: #eff0f1;
  }
</style>
