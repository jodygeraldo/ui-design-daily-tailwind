<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Product Info UI Design - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="rounded-2xl bg-white shadow-[0_24px_28px_9px_#b3c1d933] px-6 py-8 lg:px-10 xl:px-12 max-w-3xl mx-auto"
    >
      <div class="sm:flex gap-4 sm:gap-6 md:gap-8 items-start">
        <img src="/assets/images/headset.png" alt="" class="w-56" />

        <div class="mt-8 sm:mt-0 space-y-4 sm:space-y-6 flex-1">
          <div class="bg-custom-1 px-2 py-1 rounded-full inline-block">
            <p class="text-white font-semibold text-sm">Free shipping</p>
          </div>

          <h2 class="mt-2 font-semibold text-custom-1 text-2xl">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </h2>

          <div>
            <s class="text-lg text-custom-1">1 599,-</s>
            <p class="mt-2 text-custom-1 text-4xl sm:text-5xl">799,-</p>
            <p class="mt-2 text-sm text-custom-1 opacity-60">
              The offer is valid until April 3 or as long as stock lasts!
            </p>
          </div>

          <button
            class="w-full text-white bg-custom-4 p-4 rounded-lg shadow-[0_7px_0_0_#1c57ee]"
            >Add to cart</button
          >

          <div class="flex gap-2 items-center">
            <div class="w-3 h-3 bg-custom-3 rounded-full" />
            <p class="text-black text-sm font-medium">50+ pcs. in stock.</p>
          </div>

          <div class="md:flex gap-4 justify-between items-center">
            <button
              class="flex justify-center items-center gap-2 w-full p-4 rounded-lg bg-white border-2 border-custom-2"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <path
                  d="M9.33333 26.6667H22.6667"
                  stroke="#191847"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 7.99999L16 6.66666L24 7.99999"
                  stroke="#191847"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 4V26.6667"
                  stroke="#191847"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 16L8 8L4 16C4 17.0609 4.42143 18.0783 5.17157 18.8284C5.92172 19.5786 6.93913 20 8 20C9.06087 20 10.0783 19.5786 10.8284 18.8284C11.5786 18.0783 12 17.0609 12 16Z"
                  stroke="#191847"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 16L24 8L20 16C20 17.0609 20.4214 18.0783 21.1716 18.8284C21.9217 19.5786 22.9391 20 24 20C25.0609 20 26.0783 19.5786 26.8284 18.8284C27.5786 18.0783 28 17.0609 28 16Z"
                  stroke="#191847"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="text-custom-1 sm:text-lg font-medium"
                >Add to cart</span
              >
            </button>

            <button
              class="mt-4 md:mt-0 flex justify-center items-center gap-2 w-full p-4 rounded-lg bg-white border-2 border-custom-2"
            >
              <Icon
                id="heart"
                class="w-6 h-6 text-custom-1"
                ariaHidden={true}
              />
              <span class="text-custom-1 sm:text-lg font-medium"
                >Add to cart</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #191847;
    --color-2: #c9c9da;
    --color-3: #00d98b;
    --color-4: #4788e9;
  }
</style>
