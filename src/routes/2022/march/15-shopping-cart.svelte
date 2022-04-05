<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Shopping Cart - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-md rounded-3xl bg-white py-6 px-6 shadow-[0_34px_44px_0_#4378ff13] md:p-6 lg:p-8"
    >
      <div
        class="absolute -top-4 -left-4 right-6 bottom-3 -z-10 hidden rounded-3xl bg-custom-7 md:block lg:-top-6 lg:-left-6 lg:right-8 lg:bottom-4 2xl:-top-8 2xl:-left-8 2xl:right-12 2xl:bottom-6"
      />

      <div class="space-y-8">
        <div>
          <h2 class="text-xl font-black text-custom-1">Your shopping cart</h2>
          <p class="mt-2 text-custom-1">ID: 548856</p>
        </div>

        <div class="gap-4 sm:flex">
          <img src="/assets/images/item-5.png" alt="" class="h-20 w-20" />
          <div class="mt-2 sm:mt-0">
            <h3 class="font-semibold text-custom-1">
              Ecovacs Deebot OZMO N8 + robot vacuum cleaner W125978483
            </h3>
            <div
              class="mt-2 inline-block rounded-full bg-custom-3 py-1 px-4 text-white"
            >
              In stock
            </div>

            <div class="mt-4">
              <button
                class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-custom-4 p-2 text-sm font-semibold text-custom-1"
                >-</button
              >
              <span
                class="inline-flex h-8 w-8 items-center justify-center rounded-md border border-custom-6 bg-white p-2 text-sm font-semibold text-custom-1"
              >
                1
              </span>
              <button
                class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-custom-4 p-2 text-sm font-semibold text-custom-1"
                >+</button
              >
            </div>
          </div>
        </div>

        <div class="h-0.5 w-full bg-custom-5" />

        <div>
          <div class="flex items-center justify-between">
            <p class="text-custom-1">Standard package</p>
            <p class="font-semibold uppercase text-custom-1">Free</p>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <p class="text-custom-1">Total VAT</p>
            <p class="font-semibold uppercase text-custom-1">879,-</p>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <p class="font-semibold text-custom-1">Total NOK</p>
            <p class="font-semibold uppercase text-custom-1">4395,-</p>
          </div>

          <a
            href="#link"
            class="mt-4 flex items-center justify-between text-sm font-medium text-custom-2 underline"
          >
            Got a gift card or a promotional code?
          </a>
        </div>

        <button class="w-full rounded-full bg-custom-2 p-3 text-white"
          >Checkout</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #171d3c;
    --color-2: #4378ff;
    --color-3: #81bd45;
    --color-4: #e0f2fa;
    --color-5: #c6c9d2;
    --color-6: #c6cad2;
    --color-7: #b8d4e4;
  }
</style>
