<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Pick Up In Store Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div
      class="relative px-4 py-6 sm:px-6 md:p-6 lg:p-8 bg-white rounded-3xl shadow-[0_4px_65px_0_#5460c817] max-w-md mx-auto"
    >
      <div
        class="hidden md:block absolute -top-4 -left-4 right-6 bottom-3 lg:-top-6 lg:-left-6 lg:right-8 lg:bottom-4 2xl:-top-8 2xl:-left-8 2xl:right-12 2xl:bottom-6 bg-custom-7 -z-10 rounded-3xl"
      />

      <div class="space-y-6">
        <div>
          <div>
            <div>
              <h2 class="font-bold text-xl text-custom-2">
                Ecovacs Deebot OZMO N8 +
              </h2>
              <div class="flex gap-2 items-center mt-4">
                <div class="flex gap-0.5">
                  <Icon id="star-filled" class="w-5 h-5 text-custom-4" />
                  <Icon id="star-filled" class="w-5 h-5 text-custom-4" />
                  <Icon id="star-filled" class="w-5 h-5 text-custom-4" />
                  <Icon id="star-filled" class="w-5 h-5 text-custom-4" />
                  <Icon id="star-filled" class="w-5 h-5 text-custom-4" />
                </div>
                <p class="font-semibold text-custom-3">
                  <span class="font-black text-custom-2"
                    >5.0 &nbsp;&middot;&nbsp;</span
                  > 4 review
                </p>
              </div>
            </div>
            <p class="text-custom-2 font-black text-2xl mt-6">4395,-</p>
          </div>

          <div class="mt-6 rounded-2xl bg-custom-6 p-2 sm:flex justify-between">
            <button class="p-2 w-full text-custom-3">Deliver the item</button>
            <button
              class="shadow-[0_5px_5px_0_#002ca806] p-2 bg-white rounded-xl text-custom-2 w-full"
              >Pick up in store</button
            >
          </div>
        </div>

        <div class="relative">
          <Icon
            id="magnifying-glass"
            class="w-6 h-6 text-custom-3 left-3 top-1/2 bottom-1/2 -translate-y-1/2 absolute"
          />
          <input
            type="search"
            placeholder="1254"
            class="rounded-2xl p-3 border border-custom-5 placeholder:font-semibold placeholder-custom-2 w-full pl-11"
          />
        </div>

        <div class="rounded-2xl p-3 border border-custom-5">
          <div>
            <h3 class="text-custom-2">
              <span class="font-bold">Fyllingsdalen &nbsp;&middot;&nbsp;</span> 3.8
              km away
            </h3>
            <p class="mt-2 text-custom-2">Pick up in 5 days</p>
            <p class="text-custom-3 text-sm mt-2">
              Closed, opens tomorrow at 10:00
            </p>
          </div>
          <button
            class="mt-4 text-white bg-custom-1 rounded-2xl p-3 w-full font-semibold"
            >Add to cart</button
          >
        </div>

        <div>
          <h3 class="text-custom-3 uppercase text-sm font-bold">
            Get the items faster
          </h3>

          <div class="mt-4">
            <div class="rounded-2xl p-3 border border-custom-5">
              <h3 class="text-custom-2">
                <span class="font-bold">Fana &nbsp;&middot;&nbsp;</span> 7.1 km away
              </h3>
              <p class="mt-2 text-custom-2">Pick up in 3 days</p>
              <p class="text-custom-3 text-sm mt-2">
                Closed, opens tomorrow at 10:00
              </p>
            </div>
          </div>

          <div class="mt-2 rounded-2xl p-3 border border-custom-5">
            <h3 class="text-custom-2">
              <span class="font-bold">Lagoon &nbsp;&middot;&nbsp;</span> 83.6 km
              away
            </h3>
            <p class="mt-2 text-custom-2">Pick up in 4 days</p>
            <p class="text-custom-3 text-sm mt-2">
              Closed, opens tomorrow at 10:00
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #4571f5;
    --color-2: #172039;
    --color-3: #747988;
    --color-4: #f8ab18;
    --color-5: #d7d9e8;
    --color-6: #f5f6ff;
    --color-7: #4471f5;
  }
</style>
